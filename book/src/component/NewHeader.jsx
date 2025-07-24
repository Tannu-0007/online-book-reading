import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

const NewHeader = () => {
    const { pathname } = useLocation()
    const navigate = useNavigate()
    return (
        <>
            <div className="container">


                {/* {console.log(pathname.slice(0, 9), 'path')}
            {console.log(navigate, 'history')} */}
                <button onClick={() => navigate('/readmore/1')}>btnto readmore1</button>
                <div className="row">
                    <div className="col-4">
                        <NavLink to={'/'} className={`${pathname === '/' ? 'active text-danger' : 'inactive'}`}>Home</NavLink >
                    </div>
                    <div className="col-4">
                        <NavLink to={'/disc'} className={`${pathname === '/disc' ? 'active text-danger' : 'inactive'}`}>disc</NavLink >
                    </div>

                </div >
            </div>
        </>
    )
}

export default NewHeader