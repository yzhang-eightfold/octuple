import React, { FC } from 'react';
import { LoaderProps, LoaderSize } from './Loader.types';
import { mergeClasses } from '../../shared/utilities';

import styles from './loader.module.scss';

export const Loader: FC<LoaderProps> = ({
    size = LoaderSize.Small,
    classNames,
    ...rest
}) => {
    const dotClasses = mergeClasses([
        styles.dot,
        {
            [styles.small]: size === LoaderSize.Small,
            [styles.medium]: size === LoaderSize.Medium,
            [styles.large]: size === LoaderSize.Large,
        },
    ]);
    return (
        <div
            className={mergeClasses([styles.loaderContainer, classNames])}
            {...rest}
        >
            <div className={dotClasses} />
            <div className={dotClasses} />
            <div className={dotClasses} />
        </div>
    );
};
