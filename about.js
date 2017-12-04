var BTC_USD = 11225.60
var ETH_USD = 471.11
var BCH_USD = 1642.19
var XRP_USD = 0.255991
var DASH_USD = 777.71

var BTC_PRED = 12500.60
var ETH_PRED = 461.11
var BCH_PRED = 1742.19
var XRP_PRED = 0.155991
var DASH_PRED = 977.71

function BTC(number) {
  $( " button.cointype " ).text("BTC");
  $( " span.money " ).text(BTC_USD);
  $( " span.prediction " ).text(BTC_PRED);
  $( " span.prediction " ).css('color', 'green');
  $(' .coin-logo ').attr("src", "img/btc.png");
}

function ETH(number) {
  $( " button.cointype " ).text("ETH");
  $( " span.money " ).text(ETH_USD);
  $( " span.prediction " ).text(ETH_PRED);
  $( " span.prediction " ).css('color', 'red');
  $(' .coin-logo ').attr("src", "img/eth.png");
}

function BCH(number) {
  $( " button.cointype " ).text("BCH");
  $( " span.money " ).text(BCH_USD);
  $( " span.prediction " ).text(BCH_PRED);
  $( " span.prediction " ).css('color', 'green');
  $(' .coin-logo ').attr("src", "img/bch.png");
}

function XRP(number) {
  $( " button.cointype " ).text("XRP");
  $( " span.money " ).text(XRP_USD);
  $( " span.prediction " ).text(XRP_PRED);
  $( " span.prediction " ).css('color', 'red');
  $(' .coin-logo ').attr("src", "img/xrp.png");
}

function DASH(number) {
  $( " button.cointype " ).text("DASH");
  $( " span.money " ).text(DASH_USD);
  $( " span.prediction " ).text(DASH_PRED);
  $( " span.prediction " ).css('color', 'green');
  $(' .coin-logo ').attr("src", "img/dash.png");
}
