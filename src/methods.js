import { hockey, hockey0, skates0, rotorink } from './assets/index'

export default {
    matchPlayer(position) {
        switch (position) {
            case "Goalie":
                return hockey
            case "Defenseman":
                return rotorink
            case "Center":
                return hockey0
            case "Left Wing":
                return skates0
            case "Right Wing":
                return hockey0
            default:
                return hockey
        }
    }
}