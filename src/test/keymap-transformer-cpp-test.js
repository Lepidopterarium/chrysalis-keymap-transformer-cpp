/* chrysalis-keymap-transformer-cpp -- Chrysalis keymap transformer library
 * Copyright (C) 2018  Keyboardio, Inc.
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
 * details.
 *
 * You should have received a copy of the GNU General Public License along with
 * this program. If not, see <http://www.gnu.org/licenses/>.
 */

import "chai/register-expect"

import SerialPort from "serialport/test"
import Focus from "chrysalis-focus"
import Keymap from "chrysalis-keymap"
import CPPTransformer from "../lib/chrysalis-keymap-transformer-cpp"
const MockBinding = SerialPort.Binding

describe("Keymap Transformre, CPP", () => {
    let port, focus, keymap

    function emitData(port, response) {
        port.binding.emitData(Buffer.from(response + "\r\n.\r\n"))
    }

    beforeEach(() => {
        MockBinding.createPort("/dev/ttyFake")

        port = new SerialPort("/dev/ttyFake")
        focus = new Focus(port)
        keymap = new Keymap(4)
        keymap.addKeyTransformers([new CPPTransformer()])
        focus.addCommands({keymap: keymap})
    })

    afterEach(() => {
        MockBinding.reset()
    })

    describe("#keymap transform", () => {
        it ("transforms the keymap correctly", (done) => {
            emitData(port, "4 5 6 7")
            focus.command("keymap").then((keymap) => {
                expect(keymap).to.be.an("array").that.has.lengthOf(1)
                expect(keymap).to.have.deep.ordered.members([['Key_A', 'Key_B', 'Key_C', 'Key_D']])
                done()
            })
        })
    })
})
