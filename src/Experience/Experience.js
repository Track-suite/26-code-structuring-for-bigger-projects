import * as THREE from 'three'
import Resources from '../Utils/Resources'
import Sizes from "../Utils/Sizes"
import Time from "../Utils/Time"
import Camera from './Camera'
import Renderer from './Renderer'
import World from './World/World.js'
import sources from './sources'
import Debug from '../Utils/Debug'



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
        this.debug = new Debug()
        this.sizes = new Sizes()
        this.time = new Time()
        this.scene = new THREE.Scene()
        this.resources = new Resources(sources)
        this.camera = new Camera()
        this.renderer = new Renderer()
        this.world = new World()

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
        this.renderer.resize()
    }

    update()
    {
        this.camera.update()
        this.world.update()
        this.renderer.update()

    }
    destroy()
    {
        this.sizes.off('resize')
        this.time.off('tick')

        // Traverse the whole 
        this.scene.traverse((child) =>
        {
            child.geometry.dispose()

                // Loop through the material properties
                for(const key in child.material)
                {
                    const value = child.material[key]

                    // Test if there is a dispose function
                    if(value && typeof value.dispose === 'function')
                    {
                        value.dispose()
                    }
                }
               
        })
         // dispose the controls
         this.camera.controls.dispose()

         // dispose the renderer
         this.renderer.instance.dispose()

        //  dispose of the debug
        if(this.debug.active)
            this.debug.ui.destroy()
    }

}