import React from 'react';
import classNames from 'classnames/bind';
import Styles from './AccountItem.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faCircleXmark, faMagnifyingGlass, faIdBadge, faCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(Styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT30BLrZspXoVTIngbEtBmqhHId1y0kH7rwyw&usqp=CAU"
                alt="demo"
            />
            <div className={cx('infor')}>
                <p className={cx('name')}>
                    <span>Hellena</span>
                    <FontAwesomeIcon icon={faCheck} />
                </p>
                <span className={cx('full-name')}>Full name</span>
            </div>
        </div>
    );
}

export default AccountItem;
