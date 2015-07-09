$('document').ready(bouncingDivTopLeft);

//4 coordinates of the window are going to be needed to determine where to bounce the box
//top left is zeroWidth, maxHeight
//top right is zeroWidth, zeroHeight
//bottom left is maxWidth, maxHeight
//bottom right zeroWidth, maxHeight

function bouncingDivTopLeft()
{
    //while infinite loop badddddddd!!!!!!!!!!!!!!!!!! crashes broswer instantly
    //need something to keep track of the current position, so it can make the animation smoother
    var maxHeight = $(window).height()-100;
    var maxWidth = $(window).width()-100;
    var zeroHeight = 0;
    var zeroWidth = 0;
    
    //get the boxes height and width, which is needed coordinates 
    var boxHeight = $('div').height();
    var boxWidth = $('div').width();
    
    //gets the top and left coordinates
    var boxTop = $('div').offset().top;
    var boxLeft = $('div').offset().left;
    
    //gets the bottom and right coordinates
    var boxBottom = boxTop - 100;
    var boxRight = boxLeft - 100;
    
    $('div').css('position', 'absolute');
    
    $('div').animate({top:maxHeight - boxTop, left: maxWidth - boxLeft }, 1000, 'linear', bounceDivUpAndDown);
    
}

function bounceDivUpAndDown()
{
     //while infinite loop badddddddd!!!!!!!!!!!!!!!!!! crashes broswer instantly
    //need something to keep track of the current position, so it can make the animation smoother
    var maxHeight = $(window).height()-100;
    var maxWidth = $(window).width()-100;
    var zeroHeight = 0;
    var zeroWidth = 0;
    
    //get the boxes height and width, which is needed coordinates 
    var boxHeight = $('div').height();
    var boxWidth = $('div').width();
    
    //gets the top and left coordinates
    var boxTop = $('div').offset().top;
    var boxLeft = $('div').offset().left;
    
    //gets the bottom and right coordinates
    var boxBottom = boxTop - 100;
    var boxRight = boxLeft - 100;
    
    
    $('div').animate({top:maxHeight - boxTop, bottom: boxBottom - maxHeight }, 1000, 'linear', bouncingDivTopLeft);

}


function bouncingDivLeftAndRight()
{
    //while infinite loop badddddddd!!!!!!!!!!!!!!!!!! crashes broswer instantly
    //need something to keep track of the current position, so it can make the animation smoother
    var maxHeight = $(window).height()-100;
    var maxWidth = $(window).width()-100;
    var zeroHeight = 0;
    var zeroWidth = 0;
    
    //get the boxes height and width, which is needed coordinates 
    var boxHeight = $('div').height();
    var boxWidth = $('div').width();
    
    //gets the top and left coordinates
    var boxTop = $('div').offset().top;
    var boxLeft = $('div').offset().left;
    
    //gets the bottom and right coordinates
    var boxBottom = boxTop - 100;
    var boxRight = boxLeft - 100;
    
    $('div').animate({ left: maxWidth - boxLeft, right: boxLeft - maxWidth }, 1000, 'linear', bouncingDivTopLeft);
    
}


