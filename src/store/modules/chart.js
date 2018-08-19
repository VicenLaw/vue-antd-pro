import { fakeChartData } from '../../services/api';

export default {
  namespaced: true,
  state: {
    visitData: [],
    visitData2: [],
    salesData: [],
    searchData: [],
    offlineData: [],
    offlineChartData: [],
    salesTypeData: [],
    salesTypeDataOnline: [],
    salesTypeDataOffline: [],
    radarData: [],
    loading: true,
  },
  mutations: {
    clearAll(state) {
      state.visitData = [];
      state.visitData2 = [];
      state.salesData = [];
      state.searchData = [];
      state.offlineData = [];
      state.offlineChartData = [];
      state.salesTypeData = [];
      state.salesTypeDataOnline = [];
      state.salesTypeDataOffline = [];
      state.radarData = [];
    },
    save(state, payload) {
      state.loading = false;
      state.visitData = payload.visitData;
      state.visitData2 = payload.visitData2;
      state.salesData = payload.salesData;
      state.searchData = payload.searchData;
      state.offlineData = payload.offlineData;
      state.offlineChartData = payload.offlineChartData;
      state.salesTypeData = payload.salesTypeData;
      state.salesTypeDataOnline = payload.salesTypeDataOnline;
      state.salesTypeDataOffline = payload.salesTypeDataOffline;
      state.radarData = payload.radarData;
    },
    saveSalesData(state, payload) {
      state.salesData = payload;
    },
  },
  actions: {
    clear({ commit }) {
      commit('clearAll');
    },
    async fetch({ commit }) {
      const response = await fakeChartData();
      commit('save', response);
    },
    async fetchSalesData({ commit }) {
      const response = await fakeChartData();
      commit('saveSalesData', response.salesData);
    },
  },
};
