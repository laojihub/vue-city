new Vue({
    el: "#app",
    data: {
        //地址-收货人信息
        showAddress: false,
        username: '',
        mobile: '',

        showProvince: true,
        provinceId: '',
        provinceName: '',

        showCity: false,
        cityId: '',
        cityName: '',

        showDistrict: false,
        districtId: '',
        districtName: '',
        addressDetail: '',

        info: [],
        showCityList: [],
        showDistrictList: []

    },
    methods: {
        //切换至省份
        provinceSelected: function () {
            this.showCityList = [];
            this.showDistrictList = [];

            this.cityId = this.cityName = '';
            this.districtId = this.districtName = '';

            this.showProvince = true;
            this.showCity = false;
            this.showDistrict = false;
        },
        //切换至城市
        citySelected: function () {
            this.showDistrictList = [];
            this.districtId = this.districtName = '';

            this.showProvince = false;
            this.showCity = true;
            this.showDistrict = false;
        },
        //切换至区县
        districtSelected: function () {
            this.showProvince = false;
            this.showCity = false;
            this.showDistrict = true;
        },
        //选择省
        getProvince: function (item) {
            this.provinceId = item.value;
            this.provinceName = item.text;
            this.showCityList = item.children[0];
            this.showProvince = false;
            this.showCity = true;

            this.unSelectAll(this.info);
            item.selected = true;
        },
        //选择市
        getCity: function (item) {
            this.cityId = item.value;
            this.cityName = item.text;
            this.showDistrictList = item.children[0];

            this.showProvince = false;
            this.showCity = false;
            this.showDistrict = true;

            this.unSelectAll(this.showCityList);
            item.selected = true;
        },
        //选择区
        getDistrict: function (item) {
            this.districtId = item.value;
            this.districtName = item.text;

            this.unSelectAll(this.showDistrictList);
            item.selected = true;
        },
        //取消选择
        unSelectAll: function (list) {
            var _this = this;
            list.map(function (a) {
                if (a.selected == 'undefined') {
                    _this.$set(a, 'selected', false);
                } else {
                    a.selected = false;
                }
            });
        }
    },
    mounted: function () {
        this.$nextTick(function () {
            this.info = citydata;
        });
    }
});