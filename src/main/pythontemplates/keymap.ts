export const keymappy = `#keymap.py KB base config - v1.0.0
from kmk.keys import KC
from kmk.modules.macros import Macros, Press, Release, Tap, Delay
from kmk.modules.combos import Chord, Sequence
import pog
import customkeys

keymap = [
    tuple(eval(key.strip()) if key.strip() else eval("KC.TRNS") for key in layer)
    for layer in pog.config['keymap']
]

encoderKeymap = []
for l, layer in enumerate(pog.config['encoderKeymap']):
    layerEncoders = []
    for e, encoder in enumerate(layer):
        layerEncoders.append(tuple(map(eval, encoder)))
    encoderKeymap.append(tuple(layerEncoders))
`
