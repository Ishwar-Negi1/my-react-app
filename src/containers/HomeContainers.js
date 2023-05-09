import Home from "../components/Home";
import {connect} from 'react-redux';
import {addToCart,removeToCart} from '../Services/Actions/actions';

const mapStatetoProps = state =>({

})

const mapDispatchToProps = dispatch=>({
    addToCartHandler: data=>dispatch(addToCart(data)),
    removeToCartHandler: data=>dispatch(removeToCart(data))
})

export default connect(mapStatetoProps,mapDispatchToProps)(Home)
//export default Home;