let { logger, ee, Market } = require('edonctp');
logger = logger.getLogger('market');

class MyMarket extends Market {

    OnFrontConnected() {
        super.OnFrontConnected(...arguments);
        let { md, investor } = this.ctp;
        logger.info('ReqUserLogin : %s', md.ReqUserLogin(investor, this.ctp.nRequestID()));
    }

    OnRspUserLogin(data, rsp, nRequestID, bIsLast) {
		super.OnRspUserLogin(...arguments);
	 	console.log("SubscribeMarketData:", this.ctp.md.SubscribeMarketData(['sc1809']));
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
