import { faHandRock, faTimes, faShieldAlt, faAngleDoubleUp, faBolt } from '@fortawesome/free-solid-svg-icons';
import { palletColors } from 'config';
import { ACTIONS } from 'enums/battle.enum';
import { IIcon } from 'interfaces';

export function mountIcon(type: string): IIcon {
  switch (type) {
    case ACTIONS.ATTACK: {
      return {
        icon: faHandRock,
        label: ACTIONS.ATTACK,
        color: palletColors.blueDark,
      };
    }
    case ACTIONS.DEFEAT: {
      return {
        icon: faShieldAlt,
        label: ACTIONS.DEFEAT,
        color: palletColors.yellowDark,
      };
    }
    case ACTIONS.CHARGER: {
      return {
        icon: faAngleDoubleUp,
        label: ACTIONS.CHARGER,
        color: palletColors.greenNeon,
      };
    }
    case ACTIONS.POWER: {
      return {
        icon: faBolt,
        label: ACTIONS.POWER,
        color: palletColors.purple,
      };
    }
    default: {
      return {
        icon: faTimes,
        label: '',
        color: '',
      };
    }
  }
}
