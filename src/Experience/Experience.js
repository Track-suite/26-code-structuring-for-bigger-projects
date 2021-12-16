import * as THREE from 'three'
import Sizes from "../Utils/Sizes"
import Time from "../Utils/Time"
import Camera from './Camera'

let instance = null
export default class Experience
{
    constructor(canvas)
    {
        // Global access
        window.experience = this

        // option
        this.canvas = canvas
        
        // Setup
        this.sizes = new Sizes()
        this.time = new Time()
        this.scene = new THREE.Scene()
        this.camera = new Camera(this)

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
        
    }

    update()
    {
        
    }

}