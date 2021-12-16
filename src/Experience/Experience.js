import Sizes from "../Utils/Sizes"
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

        console.log(this.sizes.width )
    }
}