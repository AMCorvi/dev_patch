module.exports = {
  env: {
    browser:  true
    ,commonjs: true
    ,es6:      true
    ,node:     true
    // ,jest:     true
  }
  ,parserOptions: {
    ecmaVersion:  8
    ,ecmaFeatures: {
      experimentalObjectRestSpread: true
      ,jsx:                          true
    }
    ,sourceType: 'module'
  }
  ,plugins: ['react']
  ,rules:   {
    'linebreak-style': [ 'error', 'unix' ]
    ,quotes:            [ 'error', 'single' ]
    ,semi:              [ 'error', 'never' ]
    // ,"semi-style":           ["error", "last"]
    ,'comma-style':          [ 'error', 'first' ]
    ,'dot-location':         [ 'error', 'property' ]
    ,'spaced-comment':       [ 'error', 'always' ]
    ,'object-curly-newline': [ 'warn', { minProperties: 2 } ]
    ,'key-spacing':          [
      2
      ,{
        singleLine: {
          beforeColon: false
          ,afterColon:  true
        }
        ,multiLine: {
          afterColon: true
          ,align:      'value'
        }
      }
    ]
    ,eqeqeq: [ 'error', 'smart' ]
    ,curly:  [ 'error', 'multi-line' ]
    ,indent: [
      'error'
      ,2
      ,{
        SwitchCase:          1
        ,FunctionDeclaration: { parameters: 'first' }
        ,FunctionExpression:  { parameters: 'first' }
        ,CallExpression:      { arguments: 'first' }
        ,ArrayExpression:     'first'
        ,ObjectExpression:    'first'
      }
    ]
    ,'array-bracket-spacing':  [ 'error', 'always', { singleValue: false } ]
    ,'function-paren-newline': [ 'error', 'consistent', { minItems: 4 } ]
    ,'require-jsdoc':          [
      'error'
      ,{require: {
        FunctionDeclaration:     true
        ,MethodDefinition:        false
        ,ClassDeclaration:        false
        ,ArrowFunctionExpression: false
        ,FunctionExpression:      false
      }}
    ]

    /*                  Jest Related rules                      */
    // ,'jest/no-disabled-tests':     'warn'
    // ,'jest/no-focused-tests':      'error'
    // ,'jest/no-identical-title':    'error'
    // ,'jest/prefer-to-have-length': 'warn'
    // ,'jest/valid-expect':          'error'

    /*                Inactive linting rules                    */
    ,'array-bracket-newline':            'off'
    ,'array-callback-return':            'off'
    ,'array-element-newline':            'off'
    ,'arrow-body-style':                 'off'
    ,'arrow-parens':                     'off'
    ,'arrow-spacing':                    'off'
    ,'block-scoped-var':                 'off'
    ,'block-spacing':                    'off'
    ,'brace-style':                      'off'
    ,'callback-return':                  'off'
    ,camelcase:                          'off'
    ,'capitalized-comments':             'off'
    ,'class-methods-use-this':           'off'
    ,'comma-dangle':                     'off'
    ,'comma-spacing':                    'off'
    ,complexity:                         'off'
    ,'computed-property-spacing':        'off'
    ,'consistent-return':                'off'
    ,'consistent-this':                  'off'
    ,'constructor-super':                'error'
    ,'default-case':                     'off'
    ,'dot-notation':                     'off'
    ,'eol-last':                         'off'
    ,'for-direction':                    'off'
    ,'func-call-spacing':                'off'
    ,'func-name-matching':               'off'
    ,'func-names':                       'off'
    ,'func-style':                       'off'
    ,'function-paren-newline':           'off'
    ,'generator-star-spacing':           'off'
    ,'getter-return':                    'off'
    ,'global-require':                   'off'
    ,'guard-for-in':                     'off'
    ,'handle-callback-err':              'off'
    ,'id-blacklist':                     'off'
    ,'id-length':                        'off'
    ,'id-match':                         'off'
    ,'implicit-arrow-linebreak':         'off'
    ,'indent-legacy':                    'off'
    ,'init-declarations':                'off'
    ,'jsx-quotes':                       'off'
    ,'keyword-spacing':                  'off'
    ,'line-comment-position':            'off'
    ,'lines-around-comment':             'off'
    ,'lines-around-directive':           'off'
    ,'lines-between-class-members':      'off'
    ,'max-depth':                        'off'
    ,'max-len':                          'off'
    ,'max-lines':                        'off'
    ,'max-nested-callbacks':             'off'
    ,'max-params':                       'off'
    ,'max-statements':                   'off'
    ,'max-statements-per-line':          'off'
    ,'multiline-comment-style':          'off'
    ,'multiline-ternary':                'off'
    ,'new-cap':                          'off'
    ,'new-parens':                       'off'
    ,'newline-after-var':                'off'
    ,'newline-before-return':            'off'
    ,'newline-per-chained-call':         'off'
    ,'no-alert':                         'off'
    ,'no-array-constructor':             'off'
    ,'no-await-in-loop':                 'off'
    ,'no-bitwise':                       'off'
    ,'no-buffer-constructor':            'off'
    ,'no-caller':                        'off'
    ,'no-case-declarations':             'error'
    ,'no-catch-shadow':                  'off'
    ,'no-class-assign':                  'error'
    ,'no-compare-neg-zero':              'error'
    ,'no-cond-assign':                   'error'
    ,'no-confusing-arrow':               'off'
    ,'no-console':                       'error'
    ,'no-const-assign':                  'error'
    ,'no-constant-condition':            'error'
    ,'no-continue':                      'off'
    ,'no-control-regex':                 'error'
    ,'no-debugger':                      'error'
    ,'no-delete-var':                    'error'
    ,'no-div-regex':                     'off'
    ,'no-dupe-args':                     'error'
    ,'no-dupe-class-members':            'error'
    ,'no-dupe-keys':                     'error'
    ,'no-duplicate-case':                'error'
    ,'no-duplicate-imports':             'off'
    ,'no-else-return':                   'off'
    ,'no-empty':                         'error'
    ,'no-empty-character-class':         'error'
    ,'no-empty-function':                'off'
    ,'no-empty-pattern':                 'error'
    ,'no-eq-null':                       'off'
    ,'no-eval':                          'off'
    ,'no-ex-assign':                     'error'
    ,'no-extend-native':                 'off'
    ,'no-extra-bind':                    'off'
    ,'no-extra-boolean-cast':            'error'
    ,'no-extra-label':                   'off'
    ,'no-extra-parens':                  'off'
    ,'no-extra-semi':                    'error'
    ,'no-fallthrough':                   'error'
    ,'no-floating-decimal':              'off'
    ,'no-func-assign':                   'error'
    ,'no-global-assign':                 'error'
    ,'no-implicit-coercion':             'off'
    ,'no-implicit-globals':              'off'
    ,'no-implied-eval':                  'off'
    ,'no-inline-comments':               'off'
    ,'no-inner-declarations':            'error'
    ,'no-invalid-regexp':                'error'
    ,'no-invalid-this':                  'off'
    ,'no-irregular-whitespace':          'error'
    ,'no-iterator':                      'off'
    ,'no-label-var':                     'off'
    ,'no-labels':                        'off'
    ,'no-lone-blocks':                   'off'
    ,'no-lonely-if':                     'off'
    ,'no-loop-func':                     'off'
    ,'no-magic-numbers':                 'off'
    ,'no-mixed-operators':               'off'
    ,'no-mixed-requires':                'off'
    ,'no-mixed-spaces-and-tabs':         'error'
    ,'no-multi-assign':                  'off'
    ,'no-multi-spaces':                  'off'
    ,'no-multi-str':                     'off'
    ,'no-multiple-empty-lines':          'off'
    ,'no-native-reassign':               'off'
    ,'no-negated-condition':             'off'
    ,'no-negated-in-lhs':                'off'
    ,'no-nested-ternary':                'off'
    ,'no-new':                           'off'
    ,'no-new-func':                      'off'
    ,'no-new-object':                    'off'
    ,'no-new-require':                   'off'
    ,'no-new-symbol':                    'error'
    ,'no-new-wrappers':                  'off'
    ,'no-obj-calls':                     'error'
    ,'no-octal':                         'error'
    ,'no-octal-escape':                  'off'
    ,'no-param-reassign':                'off'
    ,'no-path-concat':                   'off'
    ,'no-plusplus':                      'off'
    ,'no-process-env':                   'off'
    ,'no-process-exit':                  'off'
    ,'no-proto':                         'off'
    ,'no-prototype-builtins':            'off'
    ,'no-redeclare':                     'error'
    ,'no-regex-spaces':                  'error'
    ,'no-restricted-globals':            'off'
    ,'no-restricted-imports':            'off'
    ,'no-restricted-modules':            'off'
    ,'no-restricted-properties':         'off'
    ,'no-restricted-syntax':             'off'
    ,'no-return-assign':                 'off'
    ,'no-return-await':                  'off'
    ,'no-script-url':                    'off'
    ,'no-self-assign':                   'error'
    ,'no-self-compare':                  'off'
    ,'no-sequences':                     'off'
    ,'no-shadow':                        'off'
    ,'no-shadow-restricted-names':       'off'
    ,'no-spaced-func':                   'off'
    ,'no-sparse-arrays':                 'error'
    ,'no-sync':                          'off'
    ,'no-tabs':                          'off'
    ,'no-template-curly-in-string':      'off'
    ,'no-ternary':                       'off'
    ,'no-this-before-super':             'error'
    ,'no-throw-literal':                 'off'
    ,'no-trailing-spaces':               'off'
    ,'no-undef':                         'error'
    ,'no-undef-init':                    'off'
    ,'no-undefined':                     'off'
    ,'no-underscore-dangle':             'off'
    ,'no-unexpected-multiline':          'error'
    ,'no-unmodified-loop-condition':     'off'
    ,'no-unneeded-ternary':              'off'
    ,'no-unreachable':                   'error'
    ,'no-unsafe-finally':                'error'
    ,'no-unsafe-negation':               'error'
    ,'no-unused-expressions':            'off'
    ,'no-unused-labels':                 'error'
    ,'no-unused-vars':                   'error'
    ,'no-use-before-define':             'off'
    ,'no-useless-call':                  'off'
    ,'no-useless-computed-key':          'off'
    ,'no-useless-concat':                'off'
    ,'no-useless-constructor':           'off'
    ,'no-useless-escape':                'error'
    ,'no-useless-rename':                'off'
    ,'no-useless-return':                'off'
    ,'no-var':                           'off'
    ,'no-void':                          'off'
    ,'no-warning-comments':              'off'
    ,'no-whitespace-before-property':    'off'
    ,'no-with':                          'off'
    ,'nonblock-statement-body-position': 'off'
    ,'object-curly-spacing':             'off'
    ,'object-property-newline':          'off'
    ,'object-shorthand':                 'off'
    ,'one-var':                          'off'
    ,'one-var-declaration-per-line':     'off'
    ,'operator-assignment':              'off'
    ,'operator-linebreak':               'off'
    ,'padded-blocks':                    'off'
    ,'padding-line-between-statements':  'off'
    ,'prefer-arrow-callback':            'off'
    ,'prefer-const':                     'off'
    ,'prefer-destructuring':             'off'
    ,'prefer-numeric-literals':          'off'
    ,'prefer-promise-reject-errors':     'off'
    ,'prefer-reflect':                   'off'
    ,'prefer-rest-params':               'off'
    ,'prefer-spread':                    'off'
    ,'prefer-template':                  'off'
    ,'quote-props':                      'off'
    ,radix:                              'off'
    ,'require-await':                    'off'
    ,'require-yield':                    'error'
    ,'rest-spread-spacing':              'off'
    ,'semi-spacing':                     'off'
    ,'sort-imports':                     'off'
    ,'sort-keys':                        'off'
    ,'sort-vars':                        'off'
    ,'space-before-blocks':              'off'
    ,'space-before-function-paren':      'off'
    ,'space-in-parens':                  'off'
    ,'space-infix-ops':                  'off'
    ,'space-unary-ops':                  'off'
    ,strict:                             'off'
    ,'switch-colon-spacing':             'off'
    ,'symbol-description':               'off'
    ,'template-curly-spacing':           'off'
    ,'template-tag-spacing':             'off'
    ,'unicode-bom':                      'off'
    ,'use-isnan':                        'error'
    ,'valid-jsdoc':                      'off'
    ,'valid-typeof':                     'error'
    ,'vars-on-top':                      'off'
    ,'wrap-iife':                        'off'
    ,'wrap-regex':                       'off'
    ,'yield-star-spacing':               'off'
    ,yoda:                               'off'
  }
}
