import React, { useEffect, useRef, useState } from 'react';
import { GlobalStyles } from '../Styles/globalClsx';
/** 要素が画面内に入ったか否かを判定する */
var positionStatus = function (now, bottom, offsetTop) {
    if (offsetTop > bottom) {
        return 'up';
    }
    else if (offsetTop - 100 < bottom && offsetTop - 100 < now) {
        return 'down';
    }
    else {
        return 'in';
    }
};
export var Fade = function (_a) {
    var nowHeight = _a.nowHeight, children = _a.children, transitionType = _a.transitionType;
    var ref = useRef(null);
    var clsx = GlobalStyles();
    var _b = useState(false), first = _b[0], setFirst = _b[1];
    var _c = useState(transitionType), clsxName = _c[0], setClsxName = _c[1];
    useEffect(function () {
        var _a;
        if (!first) {
            var bottom = nowHeight + window.innerHeight / 1.3;
            var offsetTop = (_a = ref.current) === null || _a === void 0 ? void 0 : _a.offsetTop;
            if (offsetTop !== undefined) {
                var status_1 = positionStatus(nowHeight, bottom, offsetTop);
                if (status_1 === 'up') {
                    first ? setClsxName(clsx.transitionFadeInEnd) : setClsxName(transitionType);
                }
                else {
                    setFirst(true);
                    setClsxName(clsx.transitionFadeInRun);
                }
            }
        }
    }, [nowHeight]);
    return (React.createElement("div", { ref: ref, className: clsxName }, children));
};
