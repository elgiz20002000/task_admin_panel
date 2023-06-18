import React, {lazy, Suspense} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import {APP_PREFIX_PATH} from 'configs/AppConfig'

export const AppViews = () => {
    return (
        <Suspense fallback={<Loading cover="content"/>}>
            <Switch>
                <Route path={`${APP_PREFIX_PATH}/home`} component={lazy(() => import(`./home`))}/>
                <Route path={`${APP_PREFIX_PATH}/clients/clients_list`} component={lazy(() => import(`./pages/user-list`))}/>
                <Route path={`${APP_PREFIX_PATH}/setting/edit-profile`} component={lazy(() => import(`./pages/setting/EditProfile`))}/>
                <Route path={`${APP_PREFIX_PATH}/setting/edit-profile`} component={lazy(() => import(`./pages/setting/EditProfile`))}/>
                <Route path={`${APP_PREFIX_PATH}/planner`} component={lazy(() => import(`./pages/planner`))}/>

                <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/home`}/>
            </Switch>
        </Suspense>
    )
}

export default React.memo(AppViews);