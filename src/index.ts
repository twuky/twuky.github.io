//@ts-ignore
import sprae from 'sprae/core.js'
import AppState from './app'
import * as signals from 'ulive'

// default directives
import 'sprae/directive/if.js'
import 'sprae/directive/each.js'
import 'sprae/directive/text.js'
import 'sprae/directive/value.js'

// import 'sprae/directive/with.js'
// import 'sprae/directive/ref.js'
// import 'sprae/directive/html.js'
// import 'sprae/directive/class.js'
// import 'sprae/directive/style.js'
// import 'sprae/directive/fx.js'
// import 'sprae/directive/default.js'

// default signals
sprae.use(signals)
// default compiler (indirect new Function to avoid detector)
sprae.use({ compile: (expr: any) => sprae.constructor(`__scope`, `with (__scope) { return ${expr} };`) })

// init app
const state = sprae(document.querySelector("#app"), AppState) as typeof AppState
state.mounted()