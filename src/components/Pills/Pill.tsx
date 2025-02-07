import React, { FC, Ref } from 'react';
import { PillProps, PillSize, PillType } from './Pills.types';
import { mergeClasses } from '../../shared/utilities';
import { Icon, IconName, IconSize } from '../Icon';

import styles from './pills.module.scss';
import { ButtonSize, DefaultButton } from '../Button';

export const Pill: FC<PillProps> = React.forwardRef(
    (
        {
            color,
            label,
            iconProps,
            theme = 'blue',
            onClose,
            onClick,
            closeButtonProps,
            pillButtonProps,
            type = PillType.default,
            size = PillSize.Large,
            ...rest
        },
        ref: Ref<HTMLDivElement>
    ) => {
        const pillSizeToButtonSizeMap = new Map<PillSize, ButtonSize>([
            [PillSize.Large, ButtonSize.Medium],
            [PillSize.Medium, ButtonSize.Small],
            [PillSize.Small, ButtonSize.Small],
            [PillSize.XSmall, ButtonSize.Small],
        ]);
        const pillSizeToIconSizeMap = new Map<PillSize, IconSize>([
            [PillSize.Large, IconSize.Medium],
            [PillSize.Medium, IconSize.Small],
            [PillSize.Small, IconSize.XSmall],
            [PillSize.XSmall, IconSize.XSmall],
        ]);
        const labelClassName: string = mergeClasses([
            styles.label,
            { [styles.medium]: size === PillSize.Medium },
            { [styles.small]: size === PillSize.Small },
            { [styles.xsmall]: size === PillSize.XSmall },
        ]);
        const tagClassName: string = mergeClasses([
            styles.tagPills,
            rest.classNames,
            { [styles.red]: theme === 'red' },
            { [styles.redOrange]: theme === 'redOrange' },
            { [styles.orange]: theme === 'orange' },
            { [styles.yellow]: theme === 'yellow' },
            { [styles.yellowGreen]: theme === 'yellowGreen' },
            { [styles.green]: theme === 'green' },
            { [styles.blueGreen]: theme === 'blueGreen' },
            { [styles.blue]: theme === 'blue' },
            { [styles.blueViolet]: theme === 'blueViolet' },
            { [styles.violet]: theme === 'violet' },
            { [styles.violetRed]: theme === 'violetRed' },
            { [styles.grey]: theme === 'grey' },
            { [styles.xsmall]: size === PillSize.XSmall },
        ]);
        return (
            <div {...rest} className={tagClassName} style={{ color }} ref={ref}>
                {iconProps && (
                    <Icon
                        {...iconProps}
                        size={pillSizeToIconSizeMap.get(size)}
                        classNames={styles.icon}
                    />
                )}
                <span className={labelClassName}>{label}</span>
                {type === PillType.withButton && (
                    <DefaultButton
                        {...pillButtonProps}
                        onClick={onClick}
                        size={pillSizeToButtonSizeMap.get(size)}
                        classNames={styles.button}
                    />
                )}
                {type === PillType.closable && (
                    <DefaultButton
                        {...closeButtonProps}
                        iconProps={{ path: IconName.mdiClose }}
                        onClick={onClose}
                        size={pillSizeToButtonSizeMap.get(size)}
                        classNames={styles.closeButton}
                    />
                )}
            </div>
        );
    }
);
