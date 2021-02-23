import { faHandRock, faTimes, faShieldAlt, faAngleDoubleUp, faBolt } from '@fortawesome/free-solid-svg-icons';
import { palletColors } from 'config';

export function mountIcon(type: string) {
  switch (type) {
    case 'attack': {
      return {
        icon: faHandRock,
        label: 'attack',
        color: palletColors.blueDark,
      };
    }
    case 'defeat': {
      return {
        icon: faShieldAlt,
        label: 'defeat',
        color: palletColors.yellowDark,
      };
    }
    case 'charger': {
      return {
        icon: faAngleDoubleUp,
        label: 'charger',
        color: palletColors.greenNeon,
      };
    }
    case 'power': {
      return {
        icon: faBolt,
        label: 'power',
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
