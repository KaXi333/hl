<template>
  <div class="home__container" id="home__container">
    <div class="home__section home__banner" id="home">
      <div class="ui text container home__banner__button" style="text-align: center;">
        <!-- <div class="widget__header-normal undefined inverted undefined">我是农场主</div> -->
        <count-down v-on:start_callback="countDownS_cb(1)" v-on:end_callback="countDownE_cb(1)"  :startTime="startTime" :endTime="timeStamp" :tipText="'距离开始文字1'" :tipTextEnd="'距离结束文字1'" :endText="'结束自定义文字2'" :dayTxt="'天'" :hourTxt="'小时'" :minutesTxt="'分钟'" :secondsTxt="'秒'"></count-down>
        <div class="m--sub">
          <span>我是农场主将于2018年7月16日4PM开放。</span></div>
        <a href="#/adventure">
          <div class="widget__button widget__button__blue  widget__button__icon  undefined">
              <img src="../common/images/logo@2x.png">敬请期待</div></a>
      </div>
    </div>
    <div class="home__game-stats">
      <div class="ui container home__game-stats-container">
        <p>
          <span class="home__game-stats-value">5859</span>
          <span class="home__game-stats-label">玩家</span></p>
        <p>
          <span class="home__game-stats-value">33167</span>
          <span class="home__game-stats-label">Etheremons</span></p>
        <p>
          <span class="home__game-stats-value">145509</span>
          <span class="home__game-stats-label">战斗</span></p>
        <p>
          <span class="home__game-stats-value">2456</span>
          <span class="home__game-stats-label">城堡</span></p>
      </div>
    </div>
    <div class="home__section home__intro d_jump" id="intro" style="height:340px;padding:0;">
      <div class="ui text container home__intro-container" style="width:100%!important;padding:0;">
        <div class="home__intro-board">
          <h2>
            <i>什么是我是农场主?</i>
          </h2>
          <p>这是一款基于区块链技术的宠物养成游戏，游戏中用户扮演的是一个拥有这一块畜牧地的农场主，用户通过线上饲养虚拟牲畜或者种植植被来获取线下的真实价值。这款游戏结合了创造、随机、自由度；宠物养成的收藏性；潜在的基因配对策略性等。</p>
          <p>在游戏中每个用户都有可能拥有全球第一无二的宠物（理论上会有几十亿种不同的宠物猪），并且通过这只宠物所拥有的基因价值产生巨大的虚拟价值。而稀有度的产生完全取决于区块链和用户的自由配种过程。</p>
          <a href="#/my-mons">
            <div class="widget__button widget__button__blue  widget__button__icon  undefined">
              <img src="../common/images/logo@2x.png">领养一只小猪</div></a>
        </div>
        <div class="home__intro-mon">
          <div class="sjx_box"><img src="../common/images/024.png"></div>
          <div class="home__intro-mon__3d">
            <three3d></three3d>
          </div>
        </div>
      </div>
    </div>
    <div class="home__section home__subscribe" style="padding:0;">
      <div class="ui text container home__subscribe__main" style="width:100%!important;padding:0;">
        <div class="home__guide__video">
          <my-player :playerContent="playerContent"></my-player>
        </div>
      </div>
    </div>
    <div class="home__section home__value">
      <div class="ui text container home__value__header">
        <div class="widget__header-normal undefined  small">游戏中可获得的价值</div>
        <p>
          <span>用户在整个游戏中将得到第一无二的宠物形象，通过交配和兑换还可以拥有更多的特色宠物。这些宠物都是记录在区块上的。其本身的价值将得到数字资产的证明。同时用户在游戏中获得的FMC也会保存在区块中，并且每个区块币有独一标识并且能够追踪到最终流向保证其价值。
在游戏过程中玩家还可以通过交易或者其他手段得到极具价值的基因并通过交配获得更多的数字资产收益。最终用户通过自己养成的猪换算价值后可以和真猪进行兑换。
            <br><!-- 用户有两种主要的方法从Etheremon生成价值。 --></span></p>
      </div>
      <div class="home__value__trade">
        <div class="ui text container home__value__trade-container">
          <div class="home__value__trade-info">
            <div class="home__value__header-text">
              <p>培养动植物获得收益</p>
            </div>
            <p>玩家通过培养宠物来让养成对象生长至成年，当玩家培养到成年后可以开启交配功能，玩家通过交配有几率获得后代，后代中会将前代父母基因继承下来。培养宠物的过程中，宠物可以进行野外探索来获得额外收益，野外探索有不同的事件触发，玩家可以在野外探索中获得游戏的金币、稀有道具以及FMC（法姆币）。</p>
          </div>
          <div class="home__value__trade-img">
            <img src="../common/images/tansuo@2x.png"></div>
        </div>
      </div>
      <div class="home__value__emont">
        <div class="ui text container home__value__emont-container">
          <div class="home__value__emont-img">
            <img src="../common/images/fmcbi@2x.png"></div>
          <div class="home__value__emont-info">
            <div class="home__value__header-text">
              <p>FMC（法姆币）</p>
            </div>
            <p>FMC的作用十分巨大，作为ECR-20的发行币种，初始发行量在10E枚，FMC不但在真实价值方面有可观的收益，以后还会针对FMC开放不同的使用途径（如购买真实商品）。随着使用途径的扩展，玩家可以用FMC来达成自己的更多的需求。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="home__section home__modes" id="abilities">
      <div class="ui text container">
        <div class="ui centered tablet reversed computer reversed grid">
          <div class="seven wide computer sixteen wide mobile seven wide tablet column">
            <div class="home__modes__castle">
              <img class="home__modes__castle-img" src="../common/images/yuantu@2x.png">
              <!-- <img class="home__modes__castle-cloud" src="../common/images/33.png"> -->
              <p>在我是农场主的世界中，有各种拥有特殊基因的动物，在这个游戏中你可以培育和交易他们</p>
            </div>
          </div>
          <div class="left aligned bottom aligned nine wide computer sixteen wide mobile nine wide tablet column">
            <div class="home__modes__intro">
              <div class="widget__header-highlight undefined ">
                <span>
                  <br>
                  <b>我是农场主</b>的玩法</span>
              </div>
              <div class="widget__section-pointing undefined">游戏初期会赠送玩家一只初始宠物，玩家可以通过饲养功能（吃饭、喝水、玩耍、清洗、喂药）来维持宠物的正常生理活动，并且通过探索来获得一定量的成长值。当宠物的成长值达到一定阶段时，会进入下一个成长阶段。（宠物的成长总共分为三个阶段：幼年期，青年期，成年期）
                <img src="../common/images/logo@2x.png"></div>
              <br>
              <br>
              <div class="widget__section-pointing undefined">当宠物达到成年期后，用户可以将宠物进行交配来获得更多的宠物数量。宠物的基因会在父母基因中继承下来，而越稀有的基因对触发事件的概率也会越大哦，同时宠物越多那么在探索中获得道具的概率也有更多的可能！
                <img src="../common/images/logo@2x.png"></div></div>
          </div>
        </div>
      </div>
    </div>
    <div class="home__section home__abilities">
      <div class="ui text container">
        <div class="ui centered stackable two column grid">
          <div class="column" style="height:400px;">
            <!-- <div class="widget__section-white-box home__abilities-transform"> -->
              <!-- <div class="widget__section-ball-box undefined ">
                <p class="home__abilities-transform__header">成长</p>
                <img class="widget__section-ball-box__ball-1" src="../common/images/bottomImg.png">
                <img class="widget__section-ball-box__ball-2" src="../common/images/bottomImg.png">
                <img class="widget__section-ball-box__ball-3" src="../common/images/bottomImg.png">
                <img class="widget__section-ball-box__ball-4" src="../common/images/bottomImg.png"></div> -->
              <!-- <p class="home__abilities-transform__text">分为三个阶段 幼年期  青年期  成年期</p> -->
              <img class="home__abilities-transform__img" src="../common/images/changzhang@2x.png"><!-- </div> -->
          </div>
          <div class="column" style="">
            <!-- <div class="widget__section-white-box home__abilities-lay"> -->
              <img class="home__abilities-lay-egg__img" src="../common/images/fanzhi@2x.png">
              <br>
              <!-- <div class="widget__section-ball-box undefined ">
                <p class="home__abilities-lay-egg__header">繁殖</p>
                <img class="widget__section-ball-box__ball-1" src="../common/images/bottomImg.png">
                <img class="widget__section-ball-box__ball-2" src="../common/images/bottomImg.png">
                <img class="widget__section-ball-box__ball-3" src="../common/images/bottomImg.png">
                <img class="widget__section-ball-box__ball-4" src="../common/images/bottomImg.png"></div>
              <p class="home__abilities-lay-egg__text">父母双方基因继承并且有50%概率产下后代。</p> --><!-- </div> -->
          </div>
        </div>
      </div>
    </div>
    <div class="home__section home__stats" id="types">
      <div class="ui text container">
        <div class="ui centered grid">
        <img src="../common/images/pig@2x.png">
         <!--  <div class="one wide computer sixteen wide mobile one wide tablet column"></div>
          <div class="fifteen wide computer sixteen wide mobile fifteen wide tablet column">
            <div class="widget__section-ball-box home__stats__content fluid">
              <img class="home__stats__mon" src="../common/images/jr.png">
              <div class="ui grid">
                <div class="row">
                  <div class="computer only tablet only six wide computer six wide tablet column"></div>
                  <div class="left aligned ten wide computer sixteen wide mobile ten wide tablet column">
                    <span>Etheremon的力量是由其
                      <b>战斗力(BP)</b>决定的，这是六种主要状态的平均值:</span>
                  </div>
                </div>
                <div class="middle aligned row">
                  <div class="computer only tablet only six wide computer six wide tablet column">
                    <div class="widget__divider-circle undefined">
                      <div class="widget__divider-circle__line"></div>
                      <div class="widget__divider-circle__circle" style="right: 0px;"></div>
                    </div>
                  </div>
                  <div class="left aligned five wide computer eight wide mobile five wide tablet column">
                    <p>
                      <b>生命值</b>
                    </p>
                  </div>
                  <div class="right aligned five wide computer eight wide mobile five wide tablet column">
                    <div class="widget__bar-stats undefined default hp">
                      <div class="widget__bar-stats__bar"></div>
                      <div class="widget__bar-stats__perc" style="right: 78.3333%;"></div>
                      <div class="widget__bar-stats__text">HP 100</div></div>
                  </div>
                </div>
                <div class="middle aligned row">
                  <div class="computer only tablet only six wide computer six wide tablet column">
                    <div class="widget__divider-circle undefined">
                      <div class="widget__divider-circle__line"></div>
                      <div class="widget__divider-circle__circle" style="right: 0px;"></div>
                    </div>
                  </div>
                  <div class="left aligned five wide computer eight wide mobile five wide tablet column">
                    <p>
                      <b>主要攻击</b>
                    </p>
                  </div>
                  <div class="right aligned five wide computer eight wide mobile five wide tablet column">
                    <div class="widget__bar-stats undefined default pa">
                      <div class="widget__bar-stats__bar"></div>
                      <div class="widget__bar-stats__perc" style="right: 80%;"></div>
                      <div class="widget__bar-stats__text">PA 90</div></div>
                  </div>
                </div>
                <div class="middle aligned row">
                  <div class="computer only tablet only six wide computer six wide tablet column">
                    <div class="widget__divider-circle undefined">
                      <div class="widget__divider-circle__line"></div>
                      <div class="widget__divider-circle__circle" style="right: 0px;"></div>
                    </div>
                  </div>
                  <div class="left aligned five wide computer eight wide mobile five wide tablet column">
                    <p>
                      <b>主要防御</b>
                    </p>
                  </div>
                  <div class="right aligned five wide computer eight wide mobile five wide tablet column">
                    <div class="widget__bar-stats undefined default pd">
                      <div class="widget__bar-stats__bar"></div>
                      <div class="widget__bar-stats__perc" style="right: 80%;"></div>
                      <div class="widget__bar-stats__text">PD 79</div></div>
                  </div>
                </div>
                <div class="middle aligned row">
                  <div class="computer only tablet only six wide computer six wide tablet column">
                    <div class="widget__divider-circle undefined">
                      <div class="widget__divider-circle__line"></div>
                      <div class="widget__divider-circle__circle" style="right: 0px;"></div>
                    </div>
                  </div>
                  <div class="left aligned five wide computer eight wide mobile five wide tablet column">
                    <p>
                      <b>次要攻击</b>
                    </p>
                  </div>
                  <div class="right aligned five wide computer eight wide mobile five wide tablet column">
                    <div class="widget__bar-stats undefined default sa">
                      <div class="widget__bar-stats__bar"></div>
                      <div class="widget__bar-stats__perc" style="right: 80%;"></div>
                      <div class="widget__bar-stats__text">SA 81</div></div>
                  </div>
                </div>
                <div class="middle aligned row">
                  <div class="computer only tablet only six wide computer six wide tablet column">
                    <div class="widget__divider-circle undefined">
                      <div class="widget__divider-circle__line"></div>
                      <div class="widget__divider-circle__circle" style="right: 0px;"></div>
                    </div>
                  </div>
                  <div class="left aligned five wide computer eight wide mobile five wide tablet column">
                    <p>
                      <b>次要防御</b>
                    </p>
                  </div>
                  <div class="right aligned five wide computer eight wide mobile five wide tablet column">
                    <div class="widget__bar-stats undefined default sd">
                      <div class="widget__bar-stats__bar"></div>
                      <div class="widget__bar-stats__perc" style="right: 80%;"></div>
                      <div class="widget__bar-stats__text">SD 75</div></div>
                  </div>
                </div>
                <div class="middle aligned row">
                  <div class="computer only tablet only six wide computer six wide tablet column">
                    <div class="widget__divider-circle undefined">
                      <div class="widget__divider-circle__line"></div>
                      <div class="widget__divider-circle__circle" style="right: 0px;"></div>
                    </div>
                  </div>
                  <div class="left aligned five wide computer eight wide mobile five wide tablet column">
                    <p>
                      <b>速度</b>
                    </p>
                  </div>
                  <div class="right aligned five wide computer eight wide mobile five wide tablet column">
                    <div class="widget__bar-stats undefined default sp">
                      <div class="widget__bar-stats__bar"></div>
                      <div class="widget__bar-stats__perc" style="right: 80%;"></div>
                      <div class="widget__bar-stats__text">SP 80</div></div>
                  </div>
                </div>
                <div class="row">
                  <div class="computer only tablet only six wide computer six wide tablet column"></div>
                  <div class="left aligned ten wide computer sixteen wide mobile ten wide tablet column">这些状态值将随着Etheremon等级的提升而得到增强。</div></div>
              </div>
              <img class="widget__section-ball-box__ball-1" src="../common/images/bottomImg.png">
              <img class="widget__section-ball-box__ball-2" src="../common/images/bottomImg.png">
              <img class="widget__section-ball-box__ball-3" src="../common/images/bottomImg.png">
              <img class="widget__section-ball-box__ball-4" src="../common/images/bottomImg.png"></div>
          </div> -->
        </div>
      </div>
    </div>
    <div class="home__section home__roadmap d_jump" id="roadmap">
      <div class="ui text container">
        <div class="ui centered container grid">
          <div class="column">
            <div class="widget__header-highlight undefined ">
              <b>蓝图</b>
            </div>
            <div class="home__roadmap-list">
              <div class="widget__section-header-box undefined">
                <div class="widget__section-header-box__header">
                  <img class="widget__section-header-box__ball" src="../common/images/logo@2x.png">当前阶段
                  <!-- <span class="widget__section-header-box__status green">[已发行]</span> --></div>
                <div class="widget__section-header-box__content">
                  <span>
                    <p>放出神秘场景，展示游戏登录注册，进入游戏后可以看到游戏的整个大地图并且能够拖动查看。拥有充值功能，并且开放当前充值1:1赠送FMC活动。</p>
                  </span>
                </div>
              </div>
              <div class="widget__section-header-box undefined">
                <div class="widget__section-header-box__header">
                  <img class="widget__section-header-box__ball" src="../common/images/logo@2x.png">第2阶段
                  <!-- <span class="widget__section-header-box__status ">[开发中]</span> --></div>
                <div class="widget__section-header-box__content">
                  <span>
                    <p>开放第一个宠物养殖区域，养猪场。拥有所有基础功能实施上线，开始正式运营。放出初始运营活动。</p>
                    <!-- <ul>
                      <li>·P2P对战模式：猎兽人可以通过发送挑战函的形式进行单挑。</li>
                      <li>·联盟和锦标赛：成千上万的猎兽人可以一起投入战斗，争取赢得大奖。</li>
                      <li>·冒险模式：狩猎和探索这个虚拟的世界来找寻全新的Etheremons。</li></ul>
                    <p>虚拟现实科技将予以应用，以期为用户的带来最佳游戏体验。</p>
                    <p>此外，脱链扩展解决方案将被引入，以解决可扩展性问题。</p> -->
                  </span>
                </div>
              </div>
              <div class="widget__section-header-box undefined">
                <div class="widget__section-header-box__header">
                  <img class="widget__section-header-box__ball" src="../common/images/logo@2x.png">第3阶段
                  <!-- <span class="widget__section-header-box__status ">[开发中]</span> --></div>
                <div class="widget__section-header-box__content">逐一开放其他宠物或者植物的养殖区域。</div>
              </div>
              <div class="widget__section-header-box undefined">
                <div class="widget__section-header-box__header">
                  <img class="widget__section-header-box__ball" src="../common/images/logo@2x.png">第4阶段
                  <!-- <span class="widget__section-header-box__status ">[开发中]</span> --></div>
                <div class="widget__section-header-box__content">神秘内容</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home__section home__exchanges d_jump" id="exchanges">
      <div class="widget__header-highlight undefined inverted">
        <b>商城</b>
      </div>
      <div class="home__exchanges__imgs">
        <a href="https://app.radarrelay.com/EMONT/WETH" target="_blank">
          <img src="../common/images/sc.png"></a>
      </div>
    </div>
    <div class="ui text container">
      <div class="home__divider-long">
        <div class="widget__divider-ball undefined">
          <img src="../common/images/logo@2x.png" style="left: 50%; transform: translateX(-50%);"></div>
      </div>
    </div>
    <div class="home__section home__partnership d_jump" id="partners">
      <div class="widget__header-highlight undefined ">
        <b>合作伙伴</b>
      </div>
      <div class="home__partnership__imgs">
        <a href="https://opskins.com/" target="_blank">
          <img src="../common/images/2.1.png">
          <p>OPSKINS</p>
        </a>
        <a href="https://decentraland.org/" target="_blank">
          <img src="../common/images/2.2.png">
          <p>DECENTRALAND</p>
        </a>
        <a href="https://www.toshi.org/" target="_blank">
          <img src="../common/images/2.3.png">
          <p>TOSHI</p>
        </a>
        <a href="https://trinity.tech/" target="_blank">
          <img src="../common/images/2.4.png">
          <p>TRINITY</p>
        </a>
        <a href="http://inwecrypto.com" target="_blank">
          <img src="../common/images/2.5.png">
          <p>INWECRYPTO</p>
        </a>
        <a href="https://ginco.io/en/" target="_blank">
          <img src="../common/images/2.6.png">
          <p>GINCO</p>
        </a>
      </div>
    </div>
    <div class="footer__wrapper">
      <div class="ui text container footer__content">
        <div class="footer__divider">
          <div class="widget__divider-ball undefined">
            <img src="../common/images/logo@2x.png" style="left: 50%; transform: translateX(-50%);"></div>
        </div>
        <div class="ui grid">
          <div class="seven wide computer sixteen wide mobile eight wide tablet column footer__logo-wrapper">
            <img class="footer__logo" src="../common/images/Farm@2x.png">
            <!-- <div class="footer__copyright">© Etheremon. All Rights Reserved.</div> --></div>
          <div class="three wide computer five wide mobile eight wide tablet column footer__sec">
            <a target="_blank" href="#/privacy">
              <p>隐私政策</p>
            </a>
            <a target="_blank" href="#/tos">
              <p>销售条款</p>
            </a>
            <a href="mailto:contact@etheremon.com?Subject=Hello" target="_blank">
              <p>联系我们</p>
            </a>
          </div>
          <div class="three wide computer five wide mobile eight wide tablet column footer__sec">
            <a href="https://discord.gg/xgJpuzc" target="_blank">
              <p>Discord</p>
            </a>
            <a href="https://t.me/myetheremon" target="_blank">
              <p>Telegram</p>
            </a>
            <a href="https://www.facebook.com/etheremon" target="_blank">
              <p>Facebook</p>
            </a>
            <a href="https://twitter.com/myetheremon" target="_blank">
              <p>Twitter</p>
            </a>
            <a href="https://www.reddit.com/r/etheremon/" target="_blank">
              <p>Reddit</p>
            </a>
          </div>
          <div class="three wide computer five wide mobile eight wide tablet column footer__sec">
            <a href="https://www.youtube.com/channel/UCofiBCZvWbHFJRzKZixGfVw" target="_blank">
              <p>Youtube</p>
            </a>
            <a href="https://medium.com/etheremon" target="_blank">
              <p>媒介</p>
            </a>
            <a href="https://medium.com/etheremon/etheremon-decentralized-world-of-ether-monsters-a4f355971ea2" target="_blank">
              <p>指南</p>
            </a>
            <a href="https://github.com/etheremon/smartcontract" target="_blank">
              <p>Github</p>
            </a>
            <p class="footer__link">合约</p></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import CountDown from './base/vue2-countdown'
import three3d from '@/components/three3d'
import myPlayer from '@/components/myPlayer'
export default {
  components: {
      CountDown,
      myPlayer,
      three3d
  },
  data () {
    return {
      scrollIndex:'',
      startTime:1531728000000,
      timeStamp:1531728000000,
      playerContent:[{
          playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
          autoplay: false, //如果true,浏览器准备好时开始回放。
          muted: false, // 默认情况下将会消除任何音频。
          loop: true, // 导致视频一结束就重新开始。
          preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: 'zh-CN',
          aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [{
          type: "video/mp4",
          src: "/static/MV/EZMV.mp4" 
          }],
          poster: require("../common/images/pic1.jpg"), //你的封面地址
          notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
          controlBar: {
              timeDivider: true,
              durationDisplay: true,
              remainingTimeDisplay: false,
          fullscreenToggle: true  //全屏按钮
          }
      }],
    }
  },
  created() {
   this.getNextDay()
   //监听topNavbar组件的事件
    this.$root.$on('scrollFn', function(index) {
      this.scrollIndex=index
      console.log(this.scrollIndex);
      this.jump(this.scrollIndex);
    }.bind(this))
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    getNextDay(){
      var timeStamp = new Date("2018-07-01 00:00:00").getTime()
        // d = new Date(d);
        // d = +d + 1000*60*60*24;
        // d = new Date(d);
        // //return d;
        // //格式化
        console.log(timeStamp)
        // return d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();   
    },
    //监听浏览器滚动事件
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if(scrollTop>=80){
        this.$root.$emit('isShowColorFn',false);
      }else{
        this.$root.$emit('isShowColorFn',true);
      }
      if(scrollTop>=230&&scrollTop<=1200){
        this.$root.$emit('isShowVideoFn',true);
      }else{
        this.$root.$emit('isShowVideoFn',false);
      }
    },
    jump (index) {
      // 用 class="d_jump" 添加锚点
      let jump = document.querySelectorAll('.d_jump')
      let total = jump[index].offsetTop
      let distance = document.documentElement.scrollTop || document.body.scrollTop
      // 平滑滚动，时长500ms，每10ms一跳，共50跳
      let step = total / 50
      if (total > distance) {
        smoothDown()
      } else {
        let newTotal = distance - total
        step = newTotal / 50
        smoothUp()
      }
      function smoothDown () {
        if (distance < total) {
          distance += step
　　　　　　　document.body.scrollTop = distance
          document.documentElement.scrollTop = distance
          setTimeout(smoothDown, 10)
        } else {
          document.body.scrollTop = total
          document.documentElement.scrollTop = total
        }
      }
      function smoothUp () {
        if (distance > total) {
          distance -= step
　　　　　　　document.body.scrollTop = distance
          document.documentElement.scrollTop = distance
          setTimeout(smoothUp, 10)
        } else {
          document.body.scrollTop = total
          document.documentElement.scrollTop = total
        }
      } 
    },
    // 在组件销毁时解除事件绑定
    beforeDestroy() {
      this.$root.$off('scrollFn')
    }
  }
}
</script>

<style scoped>
.home__container .home__modes {
  box-sizing: border-box;
}
.home__container .home__abilities {
  box-sizing: border-box;
  margin:0;
}
.ui.container.text{
  box-sizing: border-box;
}
.home__intro-mon{
  width: 55%;
  position: relative;
}
.home__intro-mon__3d{
  width: 100%;
}
.home__container .home__intro .home__intro-board{
  max-width:45%;
}
.home__intro-board{
  padding-left:  5%!important;
  padding-right:  2%!important;
}
.sjx_box{
  width:125px;
  height:340px;
  position: absolute;
  left:0;
  margin:auto;
  top:0;
  z-index: 1000;
}
.sjx_box img{
  position: absolute;
  right:0px;
}
.home__guide__video{
  width: 100%;
  overflow: hidden;
}
.home__abilities-transform__img {
  position: absolute;
  left:0;
  bottom:0.8rem;
}
.home__abilities-lay-egg__img{
  position: absolute;
  right:0;
  top:0;
}
</style>
