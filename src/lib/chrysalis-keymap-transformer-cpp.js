/* chrysalis-keymap-transformer-cpp -- Chrysalis keymap transformer library
 * Copyright (C) 2018  Gergely Nagy
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

export default class CPPTransformer {

    constructor() {
        this.hid_code_map = [
            null,
            null,
            null,
            null,
            "Key_A",
            "Key_B",
            "Key_C",
            "Key_D"
        ]
    }

    parse(k) {
        return this.hid_code_map[k]
    }

    serialize(k) {
        return this.hid_code_map.indexOf(k)
    }
}
