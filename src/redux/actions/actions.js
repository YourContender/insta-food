import { onValue, ref } from "firebase/database";
import { db } from "../../firebase";

export const getMenuListFromDatabase = (category) => {
    return async dispatch => {
        onValue(ref(db), item => {
            const data = item.val(); 
            let filteredData = data.menu.filter(item => item.category === category);

            if (data !== null) {
                dispatch({
                    type: 'GET_MENU',
                    payload: filteredData
                })
            }
        })
    }
}


export const getCurrentProduct = (id) => {
    return async dispatch => {
        onValue(ref(db), item => {
            const data = item.val(); 
            let currentItem = data.menu.filter(item => item.id === id);
            console.log('current element: ', currentItem);

            if (data !== null) {
                dispatch({
                    type: 'GET_CURR',
                    payload: currentItem
                })
            }
        })
    }
}


// useEffect(() => {
//     onValue(ref(db), item => {
//         const data = item.val();
//         let filteredData = data.menu.filter(item => item.category === category)

//         if (data !== null) {
//             return setMenuItems(filteredData);
//         }
//     })
// }, []);