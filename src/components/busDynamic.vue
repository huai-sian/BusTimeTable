<template>
  <div class="page-pb">
    <div class="container-fluid head">
      <div class="bread">
        <div class="d-flex align-items-center justify-content-center">
          <span class="me-1"><router-link to="/" style="color: #ccc;">首頁</router-link></span>
          <span style="color: #ff4c29;">//</span>
          <span class="ms-1" style="color: #ff4c29;">公車動態</span>
        </div>
      </div>
      <div class="title text-center">
        <h2 class="title__txt">Bus Dynamics</h2>
      </div>
    </div>
    <div class="container mt-5">
      <section class="row text-center">
        <div class="col-12">
          <div>
            <span class="top-titleEn">
              Bus RouteName
            </span>
            <h2 class="mb-5 top-title">查詢公車動態</h2>
            <p class="top-txt"> 選擇相對應縣市後，再選擇要查詢公車路線，即可顯示相關停靠站序、公車到站時刻等。 </p>
          </div>
        </div>
      </section>
      <section class="d-flex justify-content-between select-box">
        <div class="select-city d-flex flex-column ">
          <label for="city" class="select-label">選擇地區</label>
          <select 
          v-model="cityName"
          @change="getRouteName"
          class="form-select"
          id="city"
          name="city"
          >
          <option disabled value>請選擇縣市</option>
          <option 
            v-for="(city, idx) in cityData"
            :key="idx" :value="city.City"
            >{{ city.CityName }}</option>
          </select>
        </div>
        <div class="select-route d-flex flex-column position-relative">
          <label for="route" class="select-label">選擇公車路線</label>
          <input type="text" v-model.trim="keyword" class="form-control" id="route" name="route" @change="listOpen = true" @click="listOpen = true">
          <ul class="select-query" v-if="!keyword && listOpen && cityName">
            <li class="select-list-item" v-for="route in ownAllRouteData" :key="route.RouteID" @click.prevent="selectRoute(route.RouteName, route.displayRouteName)">{{ route.displayRouteName }}</li>
          </ul>
          <ul class="select-query" v-if="keyword && listOpen && cityName">
            <li v-if="filterData.length == 0 || !cityName">沒有資料符合</li>
            <li class="select-list-item" v-for="route in filterData" :key="route.RouteID" @click.prevent="selectRoute(route.RouteName, route.displayRouteName)">{{ route.displayRouteName }}</li>
          </ul>
        </div>
        
      </section>
        
        
        <section class="route-content flex-column" v-if="routeName">
          <div class="d-flex flex-column flex-sm-row">
            <div class="route-name">
              <p class="route-name__txt">Route Name</p>
              <p class="route-name__num">{{ routeName }}</p>
            </div>
            <div class="route-outward-return">
              <div class="route-name__txt">
                Departure & Destination Stop Name
              </div>
              <div class="outward-return-name">
                <div class="name-item">
                  {{ departureStopNameZh }}
                </div>
                <i class="fas fa-exchange d-inline-block px-3 name-icon"></i>
                <div class="name-item">
                  {{ destinationStopNameZh }}
                </div>
              </div>
            </div>
          </div>
          <div class="mt-3 route-more" data-bs-toggle="modal" data-bs-target="#infoModal">
            <i class="far fa-info-circle me-2 text-main"></i>
            <span>更多資訊</span>
          </div>
        </section>
        <a class="btn-map-toggle text-center" @click.prevent="mapToggle">
         <i class="fas fa-eye" v-if="!mapToggler"></i>
         <i class="fas fa-eye-slash" v-else></i>
         地圖 </a>
      <section>
        <div class="row">
          <div class="col-12 col-md-6 order-2 order-md-1 mt-3 mt-md-0">
            <ul class="nav nav-tabs" id="myTab" role="tablist" v-if="routeName">
              <li class="nav-item" role="presentation">
                <button 
                  class="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  type="button" role="tab"
                  aria-controls="home" 
                  aria-selected="true"
                  @click.prevent="activeTab = 'outward'"
                  >
                  去程 
                  <span class="nav-link__route">{{ destinationStopNameZh }}</span></button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  type="button" role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                  ref="returnTab"
                  @click.prevent="activeTab = 'return'"
                  >
                  返程 
                  <span class="nav-link__route">{{ departureStopNameZh }}</span></button>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent" v-if="routeName">
              <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div class="item-thead">
                  <div class="item-col stop-sequence">站序</div>
                  <div class="item-col stop-status">預估到站</div>
                  <div class="item-col stop-name">站名</div>
                </div>
                <div class="item-body">
                  <div class="item-row"
                      v-for="(item, i) in filterOutwardStopsData"
                      :key='i'
                      @click.prevent="clickStop(item)"
                      >
                    <div class="item-col stop-sequence">
                      <div class="number number-enter" v-if="item.StopStatus == 0 && item.EstimateTime <= 1">
                        {{ item.StopSequence }}
                        <span class="round"></span>
                      </div>
                      <div class="number" v-else>
                        {{ item.StopSequence }}
                        <span class="round"></span>
                      </div>
                    </div>
                    <div class="item-col stop-status">
                      <div class="item-status status" v-if="item.StopStatus == 0 && item.EstimateTime > 1">
                        {{ item.EstimateTime }} 分鐘
                      </div>
                      <div class="item-status status-enter" v-else-if="item.StopStatus == 0 && item.EstimateTime <= 1">
                        進站中
                      </div>
                      <div class="item-status status-1" v-else-if="item.StopStatus == 1">
                        尚未發車
                      </div>
                      <div class="item-status status-2" v-else-if="item.StopStatus == 2">
                        交管不停靠
                      </div>
                      <div class="item-status status-3" v-else-if="item.StopStatus === 3">
                        末班車已過
                      </div>
                      <div class="item-status status-4" v-else-if="item.StopStatus === 4">
                        今日未營運
                      </div>
                    </div>
                    <div class="item-col stop-name">
                      {{ item.StopNameZh }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <div class="item-thead">
                  <div class="item-col stop-sequence">站序</div>
                  <div class="item-col stop-status">預估到站</div>
                  <div class="item-col stop-name">站名</div>
                </div>
                <div class="item-body">
                  <div class="item-row"
                      v-for="(item, i) in filterReturnStopsData"
                      :key='i'
                      @click.prevent="clickStop(item)"
                      >
                    <div class="item-col stop-sequence">
                      <div class="number number-enter" v-if="item.StopStatus == 0 && item.EstimateTime <= 1">
                        {{ item.StopSequence }}
                        <span class="round"></span>
                      </div>
                      <div class="number" v-else>
                        {{ item.StopSequence }}
                        <span class="round"></span>
                      </div>
                    </div>
                    <div class="item-col stop-status">
                      <div class="item-status status" v-if="item.StopStatus == 0 && item.EstimateTime > 1">
                        {{ item.EstimateTime }} 分鐘
                      </div>
                      <div class="item-status status-enter" v-else-if="item.StopStatus == 0 && item.EstimateTime <= 1">
                        進站中
                      </div>
                      <div class="item-status status-1" v-else-if="item.StopStatus == 1">
                        尚未發車
                      </div>
                      <div class="item-status status-2" v-else-if="item.StopStatus == 2">
                        交管不停靠
                      </div>
                      <div class="item-status status-3" v-else-if="item.StopStatus === 3">
                        末班車已過
                      </div>
                      <div class="item-status status-4" v-else-if="item.StopStatus === 4">
                        今日未營運
                      </div>
                    </div>
                    <div class="item-col stop-name">
                      {{ item.StopNameZh }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="no-data" v-else-if="!routeName">
              <div class="no-data__content">
                <img src="../assets/images/bus.png"></img>
                <p class="txt">
                  <span>請先選擇地區</span>
                  <span>再選擇/搜尋公車路線</span>
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 order-1 order-md-2 map " v-if="!mapToggler">
            <l-map v-bind:zoom='zoom' v-bind:minZoom='10' v-bind:center="userPosition" ref="mapInfo" style="z-index: 90;">
              <l-tile-layer v-bind:url="url"></l-tile-layer>
                <l-marker :lat-lng="userPosition" @add="openPopup" :icon="icon">
                  <l-popup v-bind:option="{ autoClose: false, closeOnClick: false }">
                    <div class="d-flex align-items-center flex-column">
                      <div class="mr-1"><i class="fas fa-user-secret"></i></div>
                      <div>你的位置</div>
                    </div>
                  </l-popup>
                </l-marker>
                <template v-if="routeName">
                  <l-polyline :lat-lngs="geoSpot" :color="'#ff4c29'" :dashArray="'[10, 20]'" :weight="5"></l-polyline>
                  <l-marker 
                    v-for="(item, i) in directionData"
                    v-bind:key="i" v-bind:lat-lng="[item['StopPosition']['PositionLat'], item['StopPosition']['PositionLon']]" 
                    @click="openPopup"
                    :icon="icon">
                    <l-popup v-bind:option="{ autoClose: false, closeOnClick: false, minWidth: '400' }" >
                      <div class="d-flex align-items-center justify-content-center">
                        <span class="popup__num">{{ item.StopSequence}}</span>
                        <h3 class="popup__txt">{{ item.StopName.Zh_tw }}</h3>
                      </div>
                    </l-popup>
                  </l-marker>
                </template>
            </l-map>
          </div>
        </div>
      </section>
    </div>
    <div class="info d-flex flex-column align-items-center justify-content-center" v-if="EstimatedTimeData.length > 0" @click="clickUpdate">
      <span class="info__txt">更新時間</span>
      <div class="info__timer">
        <span class="info__number">{{ timer }}</span>
        <span>秒</span>
      </div>
    </div>
      <div class="modal fade" id="infoModal" tabindex="-1" aria-labelledby="infoModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content text-center">
          <div class="modal-header">
            <h5 class="modal-title" id="infoModalLabel">{{ RouteMeta.RouteName ? RouteMeta.RouteName.Zh_tw : null }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="infoModal__name mb-3">{{ RouteMeta.RouteName ? RouteMeta.DepartureStopNameZh : null }} - {{ RouteMeta.RouteName ? RouteMeta.DestinationStopNameZh : null }}</h3>
            <h3 class="infoModal__operator mb-3">{{ RouteMeta.RouteName ? RouteMeta.Operators[0].OperatorName.Zh_tw : null }}</h3>
            <template v-if="RouteMeta.RouteName">
              <h3 class="infoModal__ticket mb-3">備註：{{ RouteMeta.TicketPriceDescriptionZh ? RouteMeta.TicketPriceDescriptionZh : '無' }}</h3>
            </template>
            <a class="infoModal__more mb-3" target="_blank" :href="RouteMeta.RouteName ? RouteMeta.RouteMapImageUrl : null">詳細站牌資訊</a>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-dismiss" data-bs-dismiss="modal">關閉</button>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import jsSHA from 'jssha';
import { icon } from "leaflet";
import {
  LMap, LTileLayer, LMarker, LPopup, LIcon, LPolyline
} from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
import Wkt from 'wicket';

export default {
  name: 'busDynamic',
  props: {
    msg: String
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LIcon,
    LPolyline
  },
  data(){
    return {
      cityData: [],
      cityName: '',
      routeData: [],
      subRouteData: [],
      ownRouteData: [],
      ownSubRouteData: [],
      ownAllRouteData: [],
      routeName: '',
      displayRouteName: '',
      keyword: '',
      outwardStopOfRouteData: [],
      returnStopOfRouteData: [],
      EstimatedTimeData: [],
      OutwardStopsArray: [],
      ReturnStopsArray: [],
      filterOutwardStopsData: [],
      filterReturnStopsData: [],
      departureStopNameZh: '',
      destinationStopNameZh: '',
      listOpen: false,
      userPosition: [25.033671, 121.564427],
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 16,
      icon: icon({
        iconUrl: "static/icon-marker-stop.png",
        iconSize: [20, 20]
      }),
      map: null,
      activeTab: 'outward',
      mapToggler: false,
      timer: 30,
      timerInterval: '',
      geoSpot: [],
      shapeData: [],
      RouteMeta: []
    }
  },
  methods: {
    getCityData() {
      this.$store.dispatch('updateLoading', true);
      this.axios({
        methods: 'get',
        url: 'https://gist.motc.gov.tw/gist_api/V3/Map/Basic/City?$format=JSON',
        headers: this.getAuthorizationHeader()
      }).then(res => {
        this.cityData = res.data;
        console.log(res.data);
        this.$store.dispatch('updateLoading', false);
      }).catch(err => {
        console.log(err);
        this.$store.dispatch('updateLoading', false);
      })
    },
    getAuthorizationHeader() {
      // const AppID = '62fb64915752471fb3027277da00f6cf'
      // const AppKey = 'tHKmnQUiUJOJZL3KesbRFriOLi4'
      const AppID = process.env.VUE_APP_APPID
      const AppKey = process.env.VUE_APP_APPKEY
      const GMTString = new Date().toGMTString()
      const ShaObj = new jsSHA('SHA-1', 'TEXT')
      ShaObj.setHMACKey(AppKey, 'TEXT')
      ShaObj.update('x-date: ' + GMTString)
      const HMAC = ShaObj.getHMAC('B64')
      const Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';
      return { Authorization: Authorization, 'X-Date': GMTString }
    },
    countDownStart() {
      this.timerInterval = window.setInterval(() => {
        this.timer --;
        if(this.timer < 0) {
          this.getEstimatedTimeOfArrival();
          this.clearCountDown(this.timerInterval);
          this.countDownStart();
        }
      }, 1000);
    },
    clearCountDown(item) {
      this.timer = 30;
      this.timerInterval = '';
      window.clearInterval(item);
    },
    clickUpdate(){
      this.getEstimatedTimeOfArrival();
      this.clearCountDown(this.timerInterval);
      this.countDownStart();
    },
    getRouteName() {
      //console.log(this.cityName);
      this.ownRouteData = [];
      this.ownSubRouteData = [];
      this.axios({
        methods: 'get',
        url: `https://ptx.transportdata.tw/MOTC/v2/Bus/Route/City/${this.cityName}?$format=JSON`,
        headers: this.getAuthorizationHeader()
      }).then(res => {
        //console.log(res.data);
        const temp = [...res.data];
        this.routeData = temp.filter(item => {
          return item.SubRoutes.length <= 2
        });
        this.subRouteData = temp.filter(item => {
          return item.SubRoutes.length > 2
        });
        this.setAllRouteName();
      }).catch(err => {
        console.log(err);
      })
    },
    setRouteName() {
      this.routeData.forEach((item, idx) => {
        this.ownRouteData.push({
          RouteID: item.RouteID,
          RouteName: item.RouteName.Zh_tw,
          DepartureStopName: item.DepartureStopNameZh,
          DestinationStopName: item.DestinationStopNameZh,
          SubRoutes: item.SubRoutes,
          displayRouteName: `[${item.RouteName.Zh_tw}] ${item.DepartureStopNameZh} - ${item.DestinationStopNameZh}`,
        });
      })
      this.ownRouteData.sort((a, b) => {
        return a.RouteName.localeCompare(b.RouteName)
      })
    },
    setSubRouteName() {
      this.subRouteData.forEach((item, idx) => {
        this.ownSubRouteData.push({
          RouteID: item.RouteID,
          RouteName: item.RouteName.Zh_tw,
          DepartureStopName: item.DepartureStopNameZh,
          DestinationStopName: item.DestinationStopZh,
          SubRoutes: item.SubRoutes,
          displayRouteName: `[${item.RouteName.Zh_tw}] ${item.DepartureStopNameZh} - ${item.DestinationStopNameZh}`,
        });
      })
      this.ownSubRouteData.sort((a,b) => {
        return a.RouteName.localeCompare(b.RouteName)
      })
    },
    setAllRouteName() {
      this.setRouteName();
      this.setSubRouteName();
      this.ownAllRouteData = this.ownRouteData.concat(this.ownSubRouteData);
    },
    setRouteStopName() {
      this.ownAllRouteData.forEach(item => {
        if(item.RouteName == this.routeName) {
          this.departureStopNameZh = item.DepartureStopName
          this.destinationStopNameZh = item.DestinationStopName
          //console.log(this.departureStopNameZh);
          //console.log(this.destinationStopNameZh);
        }
      })
    },
    selectRoute(name, displayName) {
      this.displayRouteName = displayName;
      this.routeName = name;
      this.listOpen = false;
      this.setRouteStopName();
      this.$store.dispatch('updateLoading', true);
      this.axios({
        methods: 'get',
        url: `https://ptx.transportdata.tw/MOTC/v2/Bus/StopOfRoute/City/${this.cityName}/${this.routeName}?$format=JSON`,
        headers: this.getAuthorizationHeader()
      }).then(res => {
        this.clearCountDown(this.timerInterval);
        this.countDownStart();
        if(res.data.length > 0) {
          this.filterOutwardStopsData = []
          this.filterReturnStopsData = []
        }
        const matchStopOfRoute = res.data.filter(item => {
          if(item.RouteName.Zh_tw == this.routeName) {
            return item
          }
        })
        this.outwardStopOfRouteData = matchStopOfRoute.filter(item =>
          item.Direction === 0 || item.Direction === 255
        );
        this.returnStopOfRouteData = matchStopOfRoute.filter(item =>
          item.Direction === 1 || item.Direction === 255
        );
        // console.log(this.outwardStopOfRouteData);
        // console.log(this.outwardStopOfRouteData);
        this.getEstimatedTimeOfArrival();
        this.getRouteMeta();
        this.$store.dispatch('updateLoading', false);
      }).catch(err => {
        console.log(err);
         this.$store.dispatch('updateLoading', false);
      })
      
    },
    getRouteMeta(){
      this.RouteMeta = [];
      this.axios({
        methods: 'get',
        url: `https://ptx.transportdata.tw/MOTC/v2/Bus/Route/City/${this.cityName}/${this.routeName}?$format=JSON`,
        headers: this.getAuthorizationHeader()
      }).then(res => {
        res.data.filter(item => {
          return item.RouteName.Zh_tw === this.routeName;
        })
        this.RouteMeta = res.data[0];
        console.log(this.RouteMeta);
        console.log(this.RouteMeta.RouteName.Zh_tw);
      }).catch(err => {
        console.log(err);
      })
    },
    getEstimatedTimeOfArrival() {
      this.filterOutwardStopsData = [];
      this.filterReturnStopsData = [];
      console.log(`https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/${this.cityName}/${this.routeName}?$format=JSON`);
      this.axios({
        methods: 'get',
        url: `https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/${this.cityName}/${this.routeName}?$format=JSON`,
        headers: this.getAuthorizationHeader()
      }).then(res => {
        this.EstimatedTimeData = res.data;
        const tempOutwardEstTime = this.EstimatedTimeData.filter(item => 
          item.Direction === 0 || item.Direction === 255
        )
        const tempReturnEstTime = this.EstimatedTimeData.filter(item => 
          item.Direction === 1 || item.Direction === 255
        )
        const tempOutwardStops = this.outwardStopOfRouteData.map(item => 
          item.Stops
        )
        const tempReturnStops = this.returnStopOfRouteData.map(item => 
          item.Stops
        )
        // console.log(this.EstimatedTimeData);
        this.OutwardStopsArray = [].concat(...tempOutwardStops);
        this.ReturnStopsArray = [].concat(...tempReturnStops);
        // console.log(this.OutwardStopsArray);
         console.log(tempOutwardEstTime);
         console.log(tempReturnEstTime);
        tempOutwardEstTime.forEach(EstTimeitem => {
          if(EstTimeitem.RouteName.Zh_tw === this.routeName) {
            this.OutwardStopsArray.forEach(item => {
              if(item.StopUID === EstTimeitem.StopUID) {
                this.filterOutwardStopsData.push({
                  RouteID: EstTimeitem.RouteID,
                  RouteUID: EstTimeitem.RouteUID,
                  StopID: EstTimeitem.StopUID,
                  StopStatus: EstTimeitem.StopStatus,
                  StopNameZh: EstTimeitem.StopName.Zh_tw,
                  Stops: item,
                  StopSequence: item.StopSequence,
                  EstimateTime: Math.floor(EstTimeitem.EstimateTime / 60)
                })
              }
            })
          }
        })
        tempReturnEstTime.forEach(EstTimeitem => {
          if(EstTimeitem.RouteName.Zh_tw === this.routeName) {
            this.ReturnStopsArray.forEach(item => {
              if(item.StopUID === EstTimeitem.StopUID) {
                this.filterReturnStopsData.push({
                  RouteID: EstTimeitem.RouteID,
                  RouteUID: EstTimeitem.RouteUID,
                  StopID: EstTimeitem.StopUID,
                  StopStatus: EstTimeitem.StopStatus,
                  StopNameZh: EstTimeitem.StopName.Zh_tw,
                  Stops: item,
                  StopSequence: item.StopSequence,
                  EstimateTime: Math.floor(EstTimeitem.EstimateTime / 60)
                })
              }
            })
          }
        })
        this.filterOutwardStopsData.sort(function (a, b) {
          return a.StopSequence - b.StopSequence
        })
        this.filterReturnStopsData.sort(function (a, b) {
          return a.StopSequence - b.StopSequence
        })
        this.setView(this.OutwardStopsArray);
        this.getGeo();
        console.log(this.filterReturnStopsData);
      }).catch(err => {
        console.log(err);
      })
    },
    getGeo() {
      this.axios({
        methods: 'get',
        url: `https://ptx.transportdata.tw/MOTC/v2/Bus/Shape/City/${this.cityName}/${this.routeName}?$format=JSON`,
        headers: this.getAuthorizationHeader()
      }).then(res => {
        this.shapeData = res.data;
        this.handlePolyLine();
      }).catch(err => {
        console.log(err);
      })
    },
    handlePolyLine() {
      const tempData = this.shapeData.filter(item => {
        return item.RouteName.Zh_tw === this.routeName;
      })
      const wkt = new Wkt.Wkt();
      this.geoSpot = wkt.read(tempData[0].Geometry).toJson();
      this.geoSpot = this.geoSpot['coordinates'];
      this.geoSpot.forEach(item => {
        item.reverse();
      })
      console.log(this.geoSpot);
    },
    setView(data) {
      const vm = this;
      const tempPositionArr = data.map(item => {
        return [item.StopPosition.PositionLat, item.StopPosition.PositionLon];
      })
      const index = Math.round(tempPositionArr.length / 2)
      const center = tempPositionArr[index];
      
      const map  = vm.$refs.mapInfo.mapObject;
      console.log(map);
      map.setView(center, 15);
    },
    openPopup(e) {
      this.$nextTick(() => {
        e.target.openPopup();
      })
    },
    clickStop(item) {
      const vm = this;
      const center = [item.Stops.StopPosition.PositionLat, item.Stops.StopPosition.PositionLon];
      const map  = vm.$refs.mapInfo.mapObject;
      console.log(map);
      map.setView(center, 15);
    },
    mapToggle() {
      this.mapToggler = !this.mapToggler;
    }
  },
  computed: {
    filterData() {
      const vm = this;
      if(vm.keyword) {
        return  vm.ownAllRouteData.filter(item => item.displayRouteName.includes(vm.keyword))
      }
    },
    directionData() {
      const vm = this;
      let data;
      if(vm.activeTab == 'outward') {
        data =  vm.OutwardStopsArray;
      } else {
        data = vm.ReturnStopsArray;
      }
      return data;
    }
  },
  mounted() {
    const vm = this;
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude} = position;
      vm.userPosition = [latitude, longitude];
    })
    this.map = this.$refs.mapInfo;
  },
  created() {
    this.getCityData();
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

