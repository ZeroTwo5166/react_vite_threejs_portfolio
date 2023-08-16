import * as THREE from 'three'
import {useEffect, useRef, useState } from 'react'
import star from '../assets/cross.png'
import './Gate.css'


function Gate( {onDelete}) {
    
    const hasRun = useRef(0);
    useEffect(()=> {

        const cross = new THREE.TextureLoader().load(star);
        const canvas = document.querySelector('canvas.webgl')
        const scene = new THREE.Scene();
        const geometry = new THREE.TorusGeometry( .7, .2, 16, 100 );
        const particlesGeometry = new THREE.BufferGeometry;
        const particlesCnt = 1000;
        const posArray = new Float32Array(particlesCnt * 3);

        for(let i = 0; i < particlesCnt * 3; i++){
            //posArray[i] = Math.random();
            posArray[i] = (Math.random() - 0.5) * (Math.random() * 5);
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray,3))

        // Materials

        const material = new THREE.PointsMaterial({
            size: 0.005
        })

        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.03,
            map: cross,
            transparent : true
        })

        // Mesh
        const sphere = new THREE.Points(geometry,material)
        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(sphere, particlesMesh)

        // Lights

        const pointLight = new THREE.PointLight(0xffffff, 0.1)
        pointLight.position.x = 2
        pointLight.position.y = 3
        pointLight.position.z = 4
        scene.add(pointLight)

        /**
         * Sizes
         */
        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        }

        window.addEventListener('resize', () =>
        {
            // Update sizes
            sizes.width = window.innerWidth
            sizes.height = window.innerHeight

            // Update camera
            camera.aspect = sizes.width / sizes.height
            camera.updateProjectionMatrix()

            // Update renderer
            renderer.setSize(sizes.width, sizes.height)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        })

        /**
         * Camera
         */
        // Base camera
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
        camera.position.x = 0
        camera.position.y = 0
        camera.position.z = 2
        scene.add(camera)

        // Controls
        // const controls = new OrbitControls(camera, canvas)
        // controls.enableDamping = true

        /**
         * Renderer
         */
        const renderer = new THREE.WebGLRenderer({
            canvas:canvas,
            antialias:true
        })
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(new THREE.Color('#21282a'), 1);

        //Mouse movement
        document.addEventListener('mousemove', animateParticles);

        let mouseX = 0;
        let mouseY = 0;

        function animateParticles(event){

            mouseX = event.clientX;
            mouseY = event.clientY;
        }

        /**
         * Animate
         */

        const clock = new THREE.Clock();

        const tick = () =>
        {

            const elapsedTime = clock.getElapsedTime();

            if(hasRun.current > 0){
            sphere.rotation.y = 15 * elapsedTime;
            }
            else {
                sphere.rotation.y = .5 * elapsedTime;
            }
            // Update objects
            particlesMesh.rotation.y = -.1 * elapsedTime;

            if(mouseX > 0){

                particlesMesh.rotation.x = -mouseY * (elapsedTime * 0.00008);
                particlesMesh.rotation.y = -mouseX * (elapsedTime * 0.00008);
            }

            // Update Orbital Controls
            // controls.update()

            // Render
            renderer.render(scene, camera)

            // Call tick again on the next frame
            window.requestAnimationFrame(tick)
        }
        tick();
    }, []);

    const enterHome = () => {
        check();
        setTimeout(onDelete, 1500);
    }
    const check = () => hasRun.current = 1;

            return ( 
                <div className='container'>
                    <div className='content' ref={hasRun}>
                        <h1>The Next <br/>Dimension</h1>
                        <h3 onClick={enterHome} className='text-red-600'>Enter</h3>
                    </div>
                    <canvas className="webgl"></canvas>  
                </div>                 
            );
        }

export default Gate;