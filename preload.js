function preload(images) {
    if (document.images) {
        var i = 0;
        var imageArray = new Array();
        imageArray = images.split(',');
        var imageObj = new Image();
        for(i=0; i<=imageArray.length-1; i++) {
            imageObj.src=imageArray[i];
            console.log(imageObj);
        }
    }
}
preload('https://github.com/Somat-1/finnNavnSenere/blob/main/retreat.gif?raw=true');
preload('https://github.com/Somat-1/finnNavnSenere/blob/main/punchAttack.gif?raw=true');
preload('https://github.com/Somat-1/finnNavnSenere/blob/main/ForgivingHand.gif?raw=true');
preload('https://github.com/Somat-1/finnNavnSenere/blob/main/riot.gif?raw=true');
preload('https://github.com/Somat-1/finnNavnSenere/blob/main/onePunch.gif?raw=true');
preload('https://github.com/Somat-1/finnNavnSenere/blob/main/fart.gif?raw=true');
preload('https://github.com/Somat-1/finnNavnSenere/blob/main/sonic.gif?raw=true');
preload('https://github.com/Somat-1/finnNavnSenere/blob/main/hyperBeam.gif?raw=true');
preload('https://github.com/Somat-1/finnNavnSenere/blob/main/betaCharge.gif?raw=true');
preload('https://github.com/Somat-1/finnNavnSenere/blob/main/capital%20storming.gif?raw=true');
preload('https://github.com/Somat-1/finnNavnSenere/blob/main/Nuke.gif?raw=true');
preload('https://github.com/Somat-1/finnNavnSenere/blob/main/capital%20storming.gif?raw=true');