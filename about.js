var BTC_USD = 11225.60
var ETH_USD = 471.11
var BCH_USD = 1642.19
var XRP_USD = 0.255991
var DASH_USD = 777.71

function BTC(number) {
  $( " button.cointype " ).text("BTC");
  $( " span.money " ).text(BTC_USD);
  $(' .coin-logo ').attr("src", "img/btc.png");
}

function ETH(number) {
  $( " button.cointype " ).text("ETH");
  $( " span.money " ).text(ETH_USD);
  $(' .coin-logo ').attr("src", "img/eth.png");
}

function BCH(number) {
  $( " button.cointype " ).text("BCH");
  $( " span.money " ).text(BCH_USD);
  $(' .coin-logo ').attr("src", "img/bch.png");
}

function XRP(number) {
  $( " button.cointype " ).text("XRP");
  $( " span.money " ).text(XRP_USD);
  $(' .coin-logo ').attr("src", "img/xrp.png");
}

function DASH(number) {
  $( " button.cointype " ).text("DASH");
  $( " span.money " ).text(DASH_USD);
  $(' .coin-logo ').attr("src", "img/dash.png");
}
