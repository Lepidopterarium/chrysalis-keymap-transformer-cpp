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
            "XXX",
            undefined,
            undefined,
            undefined,
            "Key_A",
            "Key_B",
            "Key_C",
            "Key_D",
            "Key_E",
            "Key_F",
            "Key_G",
            "Key_H",
            "Key_I",
            "Key_J",
            "Key_K",
            "Key_L",
            "Key_M",
            "Key_N",
            "Key_O",
            "Key_P",
            "Key_Q",
            "Key_R",
            "Key_S",
            "Key_T",
            "Key_U",
            "Key_V",
            "Key_W",
            "Key_X",
            "Key_Y",
            "Key_Z",
            "Key_1",
            "Key_2",
            "Key_3",
            "Key_4",
            "Key_5",
            "Key_6",
            "Key_7",
            "Key_8",
            "Key_9",
            "Key_0",
            "Key_Enter",
            "Key_Escape",
            "Key_Backspace",
            "Key_Tab",
            "Key_Spacebar",
            "Key_Minus",
            "Key_Equals",
            "Key_LeftBracket",
            "Key_RightBracket",
            "Key_Backslash",
            "Key_NonUsPound",
            "Key_Semicolon",
            "Key_Quote",
            "Key_Grave",
            "Key_Comma",
            "Key_Period",
            "Key_Slash",
            "Key_CapsLock",
            "Key_F1",
            "Key_F2",
            "Key_F3",
            "Key_F4",
            "Key_F5",
            "Key_F6",
            "Key_F7",
            "Key_F8",
            "Key_F9",
            "Key_F10",
            "Key_F11",
            "Key_F12",
            "Key_PrintScreen",
            "Key_ScrollLock",
            "Key_Pause",
            "Key_Insert",
            "Key_Home",
            "Key_PageUp",
            "Key_Delete",
            "Key_End",
            "Key_PageDown",
            "Key_RightArrow",
            "Key_LeftArrow",
            "Key_DownArrow",
            "Key_UpArrow",
            "Key_KeypadNumLock",
            "Key_KeypadDivide",
            "Key_KeypadMultiply",
            "Key_KeypadSubtract",
            "Key_KeypadAdd",
            "Key_KeypadEnter",
            "Key_Keypad1",
            "Key_Keypad2",
            "Key_Keypad3",
            "Key_Keypad4",
            "Key_Keypad5",
            "Key_Keypad6",
            "Key_Keypad7",
            "Key_Keypad8",
            "Key_Keypad9",
            "Key_Keypad0",
            "Key_KeypadDot",
            "Key_KeypadNonUsBackslashAndPipe",
            "Key_PcApplication",
            "Key_Power",
            "Key_KeypadEquals",
            "Key_F13",
            "Key_F14",
            "Key_F15",
            "Key_F16",
            "Key_F17",
            "Key_F18",
            "Key_F19",
            "Key_F20",
            "Key_F21",
            "Key_F22",
            "Key_F23",
            "Key_F24",
            "Key_Execute",
            "Key_Help",
            "Key_Menu",
            "Key_Select",
            "Key_Stop",
            "Key_Again",
            "Key_Undo",
            "Key_Cut",
            "Key_Copy",
            "Key_Paste",
            "Key_Find",
            "Key_Mute",
            "Key_VolumeUp",
            "Key_VolumeDown",
            "Key_LockingCapsLock",
            "Key_LockingNumLock",
            "Key_LockingScrollLock",
            "Key_KeypadComma",
            "Key_KeypadEqualSign",
            "Key_International1",
            "Key_International2",
            "Key_International3",
            "Key_International4",
            "Key_International5",
            "Key_International6",
            "Key_International7",
            "Key_International8",
            "Key_International9",
            "Key_Lang1",
            "Key_Lang2",
            "Key_Lang3",
            "Key_Lang4",
            "Key_Lang5",
            "Key_Lang6",
            "Key_Lang7",
            "Key_Lang8",
            "Key_Lang9",
            "Key_AlternateErase",
            "Key_Sysreq",
            "Key_Cancel",
            "Key_Clear",
            "Key_Prior",
            "Key_Return",
            "Key_Separator",
            "Key_Out",
            "Key_Oper",
            "Key_ClearSlashAgain",
            "Key_CrselSlashProps",
            "Key_Exsel",
            undefined, // 0xA5
            undefined, // 0xA6
            undefined, // 0xA7
            undefined, // 0xA8
            undefined, // 0xA9
            undefined, // 0xAA
            undefined, // 0xAB
            undefined, // 0xAC
            undefined, // 0xAD
            undefined, // 0xAE
            undefined, // 0xAF
            "Key_Keypad00",
            "Key_Keypad000",
            "Key_KeypadThousandsSeparator",
            "Key_DecimalSeparator",
            "Key_CurrencyUnit",
            "Key_CurrencySubunit",
            "Key_KeypadLeftParen",
            "Key_KeypadRightParen",
            "Key_KeypadLeftCurlyBrace",
            "Key_KeypadRightCurlyBrace",
            "Key_KeypadTab",
            "Key_KeypadBackspace",
            "Key_KeypadA",
            "Key_KeypadB",
            "Key_KeypadC",
            "Key_KeypadD",
            "Key_KeypadE",
            "Key_KeypadF",
            "Key_KeypadXor",
            "Key_KeypadCarat",
            "Key_KeypadPercent",
            "Key_KeypadLessThan",
            "Key_KeypadGreaterThan",
            "Key_KeypadAmpersand",
            "Key_KeypadDoubleampersand",
            "Key_KeypadPipe",
            "Key_KeypadDoublepipe",
            "Key_KeypadColon",
            "Key_KeypadPoundSign",
            "Key_KeypadSpace",
            "Key_KeypadAtSign",
            "Key_KeypadExclamationPoint",
            "Key_KeypadMemoryStore",
            "Key_KeypadMemoryRecall",
            "Key_KeypadMemoryClear",
            "Key_KeypadMemoryAdd",
            "Key_KeypadMemorySubtract",
            "Key_KeypadMemoryMultiply",
            "Key_KeypadMemoryDivide",
            "Key_KeypadPlusSlashMinus",
            "Key_KeypadClear",
            "Key_KeypadClearEntry",
            "Key_KeypadBinary",
            "Key_KeypadOctal",
            "Key_KeypadDecimal",
            "Key_KeypadHexadecimal",
            undefined, // 0xDE
            undefined, // 0xDF
            "Key_LeftControl",
            "Key_LeftShift",
            "Key_LeftAlt",
            "Key_LeftGui",
            "Key_RightControl",
            "Key_RightShift",
            "Key_RightAlt",
            "Key_RightGui"
        ]
    }

    parse(k) {
        if (k <= this.hid_code_map.length)
            return this.hid_code_map[k]
        if (k == 65535)
            return "___"
        return k
    }

    serialize(k) {
        return this.hid_code_map.indexOf(k)
    }
}
