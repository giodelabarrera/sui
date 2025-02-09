module.exports = {
  DEFAULT_TARGETS: {
    chrome: '41', // previous googlebot version
    ie: '11',
    safari: '8',
    firefox: '60', // esr
    ios: '8'
  },
  SELECTIVE_LOOSE_REACT_HOOKS: [
    'useState',
    'useEffect',
    'useContext',
    'useReducer',
    'useCallback',
    'useMemo',
    'useRef',
    'useImperativeHandle',
    'useLayoutEffect',
    'useDebugValue'
  ]
}
