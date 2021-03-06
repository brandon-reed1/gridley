import * as React from 'react'
import { cx } from '@emotion/css'

import { useIsLayoutActive } from './util'

export interface CaptionProps {
    className?: string
    layout?: string
    children: React.ReactNode | React.ReactNode[]
}

export const Caption: React.FC<CaptionProps> = ({ className, children, layout }) => {
    if (!useIsLayoutActive(layout)) return null

    return <div className={cx('caption', className)}>{children}</div>
}
