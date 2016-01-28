<!DOCTYPE html>
<html lang="en" manifest="app.appcache">
<head>
	<title>上绅士的床</title>
	<meta charset="UTF-8">
	<meta name="format-detection" content="telephone=no" />
	<meta name="viewport" content="width=640, user-scalable=no"/>
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black" />
	<meta name="format-detection" content="telephone=no">

	<link rel="stylesheet" href="css/app.css">
	<link rel="stylesheet" href="js/swiper/swiper.min.css">
	<link rel="stylesheet" href="js/swiper/animate.min.css">
	<link rel="stylesheet" href="js/audioplayer/audioplayer.css">
</head>
<body>
	<!-- loading -->
	<div class="loading">
		<div id="loader-e-1" class="loader-e-1"></div>
		<div class="loader"><h1></h1></div>
	</div>	
	<!-- pagelist-->
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide p1">
				<img class="bg1" src="images/p1/bg1.png" alt="">								
				<img class="e-1 ani" src="images/p1/1.png" alt="" swiper-animate-effect="zoomIn" swiper-animate-delay="0s">
				<img class="e-2 ani" src="images/p1/2.png" alt="" swiper-animate-effect="bounceInLeft" swiper-animate-delay="0.2s">
				<div id="p1-e-3">
					<img class="e-3" src="images/p1/4.png" alt="">	
				</div>
				<img class="e-4 ani" src="images/p1/3.png" alt="" swiper-animate-effect="bounceInLeft" swiper-animate-delay="0.4s">					
				<img class="e-5 ani" src="images/p1/5.png" alt="" swiper-animate-effect="bounceInRight" swiper-animate-delay="0.3s">
				<img class="e-6 ani" src="images/p1/6.png" alt="" swiper-animate-effect="zoomIn" swiper-animate-delay="0s">
				<img class="e-7 ani" src="images/p1/7.png" alt="" swiper-animate-effect="bounceInRight" swiper-animate-delay="0.5s">
				<img class="e-8 ani" src="images/p1/8.png" alt="" swiper-animate-effect="flash infinite" swiper-animate-delay="0.6s">															
			</div>
			<div class="swiper-slide p2">
				<img src="images/p2/bg2.png" alt="">
				<img class="button" src="images/p2/button.png" alt="">
				<img src="images/p2/1.png" alt="" class="e-1 next1 ani" swiper-animate-effect="bounceInLeft" swiper-animate-delay="0.2s">
				<img src="images/p2/2.png" alt="" class="e-2 next ani" swiper-animate-effect="bounceInRight" swiper-animate-delay="0.4s">
				<img src="images/p2/3.png" alt="" class="e-3 next ani" swiper-animate-effect="bounceInLeft" swiper-animate-delay="0.6s">
				<img src="images/p2/4.png" alt="" class="e-4 next ani" swiper-animate-effect="bounceInRight" swiper-animate-delay="0.8s">
			</div>
			<div class="swiper-slide p3">
				<img src="images/p3/bg3.png" alt="">
				<img class="button" src="images/p2/button.png" alt="">
				<img src="images/p3/1.png" alt="" class="e-1 next1 ani" swiper-animate-effect="bounceInLeft" swiper-animate-delay="0.2s">
				<img src="images/p3/3.png" alt="" class="e-2 next ani" swiper-animate-effect="bounceInLeft" swiper-animate-delay="0.6s">
				<img src="images/p3/2.png" alt="" class="e-3 next ani" swiper-animate-effect="bounceInRight" swiper-animate-delay="0.4s">
				<img src="images/p3/4.png" alt="" class="e-4 next ani" swiper-animate-effect="bounceInRight" swiper-animate-delay="0.8s">
			</div>
			<div class="swiper-slide p4">
				<img src="images/p4/bg4.png" alt="">
				<img class="button" src="images/p2/button.png" alt="">
				<img src="images/p4/1.png" alt="" class="e-1 next ani" swiper-animate-effect="bounceInLeft" swiper-animate-delay="0.2s">
				<img src="images/p4/3.png" alt="" class="e-2 next1 ani" swiper-animate-effect="bounceInLeft" swiper-animate-delay="0.6s">
				<img src="images/p4/2.png" alt="" class="e-3 next ani" swiper-animate-effect="bounceInRight" swiper-animate-delay="0.4s">
				<img src="images/p4/4.png" alt="" class="e-4 next ani" swiper-animate-effect="bounceInRight" swiper-animate-delay="0.8s">
			</div>	
			<div class="swiper-slide p5">
			    <div class="success">
				<img src="images/p6/bg.png" alt="">
				<img  class="e-1" src="images/p6/1.png" alt="">
				<div  class="e-2">
					<input id="name" type="text" class="in-1 e-2-1" placeholder="姓名">						
				</div>	
				<div  class="e-3">
					<input id="phone" type="text" class="in-1 e-3-1" placeholder="电话">						
				</div>			
				<select class="e-4 in-1" id="age" alt="">
					<option value="">年龄</option>
					<option value="1">18岁以下</option>
					<option value="2">18-29</option>
					<option value="3">30-39</option>
					<option value="4">40-49</option>
					<option value="5">50-59</option>
					<option value="6">60岁以上</option>	
					</select>
			             <select class="e-5 in-1" id="occupation" alt="">
				             <option value="">职业</option>
				             <option value="7">销售业务</option>
				             <option value="8">行政管理</option>
				             <option value="9">财务审计</option>
				             <option value="10">人力资源</option>
				             <option value="11">软件开发</option>
				             <option value="12">投资理财</option>
				             <option value="13">交通物流</option>
				             <option value="14">出版印刷</option>
				             <option value="15">教育培训</option>
				             <option value="16">法律事务</option>
				             <option value="17">公务员</option>
				             <option value="18">服务行业</option>
				             <option value="19">制造业</option>
				             <option value="20">在校学生</option>
				             <option value="21">自由职业</option>
				             <option value="22">退休</option>
				             <option value="23">其它</option>
				</select>
				<p class="hit"></p>
			     </div>
			     <div class="fail">
			             <img src="images/p7/bg7.png" alt="" class="e-0">
				<img src="images/p7/1.png" alt="" class="e-1">
				<img src="images/p7/2.png" alt="" class="e-2">
				<img src="images/p7/3.png" alt="" class="e-3">
			     </div>				
			</div>
			<div class="swiper-slide p6">
				<img src="images/p5/bg5.png" alt="">
				<img src="images/p5/3.png" alt="" class="e-1">
				<img src="images/p5/1.png" alt="" class="e-2">
				<img src="images/p5/2.png" alt="" class="e-3">
			</div>
		</div>
	</div>
	<!--audio-->
	<div class="audio-icon">
    		<audio id="audio-player" src="media/BGM.mp3" preload="preload" loop="loop" />
    		<audio id="audio-player-tap" src="media/tap.mp3" preload="preload" />
	</div>

	<!-- p6 answer -->
	<div class="p6-m-answer">
		<img src="images/p8/bg8.png" alt="" class="m-p5-3">
		<img src="images/transparent.png" alt="" class="m-p5-1">
	</div>

	<!--Script
====================================================== -->
<script src="js/zepto/zepto.min.js"></script>
<script src="js/motion/loader.min.js"></script>
<script src="js/motion/film.min.js"></script>
<script src="js/swiper/swiper.min.js"></script>
<script src="js/swiper/swiper.animate1.0.2.min.js"></script>
<script src="js/fastclick/fastclick.js"></script>
<script src="js/motion/landscape.min.js"></script>
<script src="js/motion/overlay.min.js"></script>
<script src="js/app.js"></script>

<?php include_once 'wechat/weChatShareJS.php';?>
<img src="images/p8/bg8.png" class="hiddenimg" alt="" />
<img src="images/p8/1.png" class="hiddenimg" alt="" />
<img src="images/share/1.png" class="hiddenimg" alt="" />
<img src="images/share/2.png" class="hiddenimg" alt="" />

</body>
</html>