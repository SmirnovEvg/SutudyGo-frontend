import React, { useEffect } from 'react';
import styles from './EventsListPage.module.sass'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Event from './Event';
import AddEvent from './AddEvent';
import { setEvents } from '../../actions';
import userIsAuthenticatedRedirect from '../wrappers/userIsAuthenticatedRedirect';
import AuthService from '../../services/AuthService';

const EventsListPage = (props) => {
    const dispatch = useDispatch();
    const events = useSelector(state => state.events);
    const user = AuthService.getUser();

    useEffect(() => {
        axios.get('http://localhost:3333/api/event')
            .then(res => {
                dispatch(setEvents(res.data))
            })
    }, [dispatch])

    return (
        <div>
            {user.role === 2 && <AddEvent />}
            {events.map((event, index) => {
                return (
                    <>
                        {!!index && <div className={styles.eventLine}></div>}
                        <Event key={index} event={event} />
                    </>
                )
            })}
        </div>
    )
}

export default userIsAuthenticatedRedirect(EventsListPage)