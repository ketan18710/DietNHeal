$(document).ready(function(){
  $('.clients').slick({
  slidesToShow: 3,
  slidesToScroll : 1,
  dots:false,
  centerMode: true,
  variableWidth: true,
  centerPadding: '100px',
  prevArrow:"<button type='button' class='slick-prev pull-left'><span> < </span></button>",
  nextArrow:"<button type='button' class='slick-next pull-right'><span> > </span></button>"
  });
  $('.listSerivesCarausel').slick({
  slidesToShow: 1,
  slidesToScroll : 1,
  dots:false,
  centerMode: true,
  arrows : false,
  speed: 200,
  variableWidth: true,
  centerPadding: '0px',
  // prevArrow:"<div class='arrowContainer slick-prev pull-left'></div>",
  // nextArrow:"<div class='arrowContainer slick-next pull-right'></div>"
  });
  const hamburgerIcon = $('#hamburgerIcon')[0]
  const cancelIcon = $('#cancelIcon')[0]
  const dropDownMenu = $('#dropDownMenu')[0]
  hamburgerIcon.onclick = ()=>{
    dropDownMenu.classList.add('enter')
    dropDownMenu.classList.remove('exit')
    dropDownMenu.style.display = "flex";
  }
  cancelIcon.onclick = ()=>{
    dropDownMenu.classList.add('exit')
    dropDownMenu.classList.remove('enter')
    dropDownMenu.style.display = "none";
  }
  const bodyOverFlowControl = (show = true) => {
    const body = $('body')[0]
    if(!show){
      body.style.overflowY = "hidden"
    }else{
      body.style.overflowY = "auto "
    }
  }
  const hideModals = () => {
    $('#BMRCalc')[0].style.display = 'none'
    $('#WaterCalc')[0].style.display = 'none'
    $('#WeightCalc')[0].style.display = 'none'
    $('#BMICalc')[0].style.display = 'none'
  }
  
  
  const modalTigger=(option,close = false)=>{
    const BMRCalc = $('#BMRCalc')[0]
    const WaterCalc = $('#WaterCalc')[0]
    const WeightCalc = $('#WeightCalc')[0]
    const BMICalc = $('#BMICalc')[0]
    hideModals()
    switch (option) {
      case 1: BMRCalc.style.display = close ? 'none' : "flex";
              bodyOverFlowControl(close ? true : false)
        break;
      case 2: WaterCalc.style.display = close ? 'none' : "flex";
              bodyOverFlowControl(close ? true : false)
        break;
      case 3: WeightCalc.style.display = close ? 'none' : "flex";
              bodyOverFlowControl(close ? true : false)
        break;
      case 4: BMICalc.style.display = close ? 'none' : "flex";
              bodyOverFlowControl(close ? true : false)
        break;
    
      default:
        break;
    }
  }
  const BMRTriggerBtn =  $('#BMRTriggerBtn')[0];
  BMRTriggerBtn.onclick = function(){
    modalTigger(1)
  };
  const WaterTriggerBtn =  $('#WaterTriggerBtn')[0];
  WaterTriggerBtn.onclick = function(){
    modalTigger(2)
  };
  const WeightTriggerBtn =  $('#WeightTriggerBtn')[0];
  WeightTriggerBtn.onclick = function(){
    modalTigger(3)
  };
  const BMICalcTriggerBtn =  $('#BMICalcTriggerBtn')[0];
  BMICalcTriggerBtn.onclick = function(){
    modalTigger(4)
  };


  const BMRCalcCloseIcon =  $('#BMRCalcCloseIcon')[0];
  BMRCalcCloseIcon.onclick = function(){
    modalTigger(1,true)
  };
  const WaterCalcCloseIcon =  $('#WaterCalcCloseIcon')[0];
  WaterCalcCloseIcon.onclick = function(){
    modalTigger(2,true)
  };
  const WeightCalcCloseIcon =  $('#WeightCalcCloseIcon')[0];
  WeightCalcCloseIcon.onclick = function(){
    modalTigger(3,true)
  };
  const BMICalcCloseIcon =  $('#BMICalcCloseIcon')[0];
  BMICalcCloseIcon.onclick = function(){
    modalTigger(4,true)
  };
})