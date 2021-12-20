import * as THREE from 'three'
import Sizes from "../Utils/Sizes"
import Time from "../Utils/Time"
import Camera from './Camera'
import Renderer from './Renderer'


let instance = null
export default class Experience
{
    constructor(canvas)
    {

        // Singlton
        if(instance)
        {
            return instance
        }


        instance = this

        // Global access
        window.experience = this

        // option
        this.canvas = canvas
        
        // Setup
        this.sizes = new Sizes()
        this.time = new Time()
        this.scene = new THREE.Scene()
        this.camera = new Camera()
        this.renderer = new Renderer()

        // Sizes Resize event
        this.sizes.on('resize', () =>
        {
            this.resize()
        })
        
        // Time tick event
        this.time.on('tick', () =>
        {
            this.update()
        })
    }

    resize()
    {
        this.camera.resize()
    }

    update()
    {
        
    }

}