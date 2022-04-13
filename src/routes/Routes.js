import React from 'react'
import Pages from '../pages'

const Routes = () => {

    // const loading = useSelector((state) => state.loading.loading)

    return (
        <>
            {/* <ToastContainer
                position="top-right"
                autoClose={toastTimer}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            /> */}
            {/* {loading ? <Loader /> : ''} */}
            <Pages />

        </>
    )
}

export default Routes