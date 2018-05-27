let { logger, ee, Market } = require('edonctp');
logger = logger.getLogger('market');

class MyMarket extends Market {
    constructor() {
        super(...arguments);
    }

    OnRspUserLogin(data, rsp, nRequestID, bIsLast) {
		super.OnRspUserLogin(...arguments);
	 	console.log("SubscribeMarketData:", this.ctp.md.SubscribeMarketData(['CF901', 'AP810']));
    }
    
    OnRspSubMarketData(data, rsp, nRequestID, bIsLast) {
    	super.OnRspSubMarketData(...arguments);
    }
    
    OnRspUnSubMarketData(data, rsp, nRequestID, bIsLast) {
    	super.OnRspSubMarketData(...arguments);
    }
    
    OnRtnDepthMarketData(data) {
		super.OnRspSubMarketData(...arguments);
		ee.emit('OnRtnDepthMarketData', data);
	}
}

module.exports = MyMarket;
