const logger = require('edonctp').logger.getLogger('app');
const ee = require('edonctp').ee;

const Class = require('iguzhi/class');

function Market(ctp) {
	this.$superConstructor(arguments);
}

(function() {

	this.OnRspUserLogin = function(data, rsp, nRequestID, bIsLast) {
		this.$superMethod(arguments);
	 	console.log("SubscribeMarketData:", this.ctp.md.SubscribeMarketData(['CF901', 'AP810']));
	};

	this.OnRspSubMarketData = function(data, rsp, nRequestID, bIsLast) {
    	this.$superMethod(arguments);
	};

	this.OnRspUnSubMarketData = function(data, rsp, nRequestID, bIsLast) {
    	this.$superMethod(arguments);
	};

	this.OnRtnDepthMarketData = function(data) {
		this.$superMethod(arguments);
		ee.emit('OnRtnDepthMarketData', data);
	};
}).call(Market.prototype);

Class.inherit(Market, require('edonctp').Market);

module.exports = Market;


