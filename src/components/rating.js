const Rating ={
    render:() =>{
        return `
        <div class="rating">
            <input type="radio"name="rate"id="rate-5">
            <label for="rate-5" class="fa fa-star"></label>
            <input type="radio"name="rate"id="rate-4">
            <label for="rate-4" class="fa fa-star"></label>
            <input type="radio"name="rate"id="rate-3">
            <label for="rate-3" class="fa fa-star"></label>
            <input type="radio"name="rate"id="rate-2">
            <label for="rate-2" class="fa fa-star"></label>
            <input type="radio"name="rate"id="rate-1">
            <label for="rate-1" class="fa fa-star"></label>
        </div>
        `
    }
}

export default Rating;



/*
const Rating ={
    render:(props) =>{
        return `
        <div class="rating">
        <span>
            <i class="${props.value>=1?'fa fa-star':props.value>=0.5?'fa fa-star-half-o':'fa fa-star-o'}"></i>
        </span>
        <span>
            <i class="${props.value>=2?'fa fa-star':props.value>=1.5?'fa fa-star-half-o':'fa fa-star-o'}"></i>
        </span>
        <span>
            <i class="${props.value>=3?'fa fa-star':props.value>=2.5?'fa fa-star-half-o':'fa fa-star-o'}"></i>
        </span>
        <span>
            <i class="${props.value>=4?'fa fa-star':props.value>=3.5?'fa fa-star-half-o':'fa fa-star-o'}"></i>
        </span>
        <span>
            <i class="${props.value>=5?'fa fa-star':props.value>=4.5?'fa fa-star-half-o':'fa fa-star-o'}"></i>
        </span>
    </div>`
        
    }
}*/
