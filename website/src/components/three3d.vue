<template>
  <div class="monster-3d" id="monster-3d__undefined" ref="mybox"></div> 
</template>

<script>
import * as THREE from "three"
import * as OrbitControls from "three-orbitcontrols"
import * as FBXLoader from "three-fbxloader-offical"
export default {
  data () {
    return {
      container:'',
      camera:'', 
      scene:'', 
      controls:'',
      renderer:'',
      mesh:'',
      textureCube:'',
      mixer:'',
      clock:new THREE.Clock()
    }
  },
  mounted(){
    this.init();
    this.animate();
  },
  methods: {
    init(){
      this.container = document.getElementById("monster-3d__undefined");
      this.camera = new THREE.PerspectiveCamera(30, this.container.offsetWidth/this.container.offsetHeight, 1, 10000);
      this.camera.position.z = 500;
      this.camera.position.y = 100;
      this.controls = new OrbitControls(this.camera,this.container);
      this.controls.minDistance = 300;
      this.controls.maxDistance = 1200;
      this.controls.autoRotate = true;
      
      
      var r = "static/skybox/";
      
      var urls = [
        r + "px.jpg", r + "nx.jpg",
        r + "py.jpg", r + "ny.jpg",
        r + "pz.jpg", r + "nz.jpg"
      ]
      this.textureCube = new THREE.CubeTextureLoader().load( urls );
      
      
      
      var geometry = new THREE.BoxGeometry(1, 1, 1);
      // var texture = new THREE.TextureLoader().load("static/skybox/ny.jpg");
      var material = new THREE.MeshBasicMaterial({color: 0xff0000});
      var mesh = new THREE.Mesh(geometry, material);
      
      
      this.scene = new THREE.Scene();
      this.scene.background = this.textureCube;
      var ambientLight = new THREE.AmbientLight( 0xffffff, 1.0 );
      this.scene.add(ambientLight);
      
      
      // this.scene.add(mesh);
      
      var that=this;
      var loader = new FBXLoader();
      loader.load('static/model/dimoxiaozhu_6.fbx', function(object){
        object.traverse( function ( child ) {
            if ( child.isMesh ) {
              child.castShadow = true;
              child.receiveShadow = true;
            }
          } );
        
        if(object.animations[0]!=null){
          that.mixer = object.mixer = new THREE.AnimationMixer( object );
          var action = that.mixer.clipAction(object.animations[0]);

          action.play();
        }
        object.scale.set(4,4,4);
        that.scene.add( object );
        object.position.y = -90;
        that.camera.lookAt(object.position);
      })
      

      this.renderer = new THREE.WebGLRenderer( { antialias: true } );
      this.renderer.setSize( this.container.offsetWidth, this.container.offsetHeight );
      this.container.appendChild( this.renderer.domElement );
    },
    animate() {
      var time=this.clock.getDelta();
      if(this.mixer){
        this.mixer.update(time);
      }
      this.controls.update();
      requestAnimationFrame( this.animate );
      this.renderer.render( this.scene, this.camera );
    },
  }
}
</script>

<style scoped>
  
</style>
