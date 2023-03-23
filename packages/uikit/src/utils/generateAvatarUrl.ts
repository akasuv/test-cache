import { ProfileType } from '../types/';
/**
 * use user's id to generate an avatar url
 *
 * @param {(string | undefined)} id
 * @param {ProfileType} type
 * @return {*}  {string}
 */
const generateUrl = (id: string | undefined, type: ProfileType): string => {
  if (!id) {
    return '';
  }

  if (type === ProfileType.Organization) {
    return 'https://image-stg.s3.us-west-2.amazonaws.com/link3/avatar/Enterprise-Logo.png';
  }

  if (type === ProfileType.Personal) {
    const hexMap = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    const _id = id.slice(-3);
    let mappedId: number = 1;

    // swap id from number to a 4 digit string for url
    const getStringId = (id: number): string => {
      if (id === 1000) {
        return id.toString();
      }

      const idString = String(id).split('');
      const _diff = 4 - idString.length;
      for (let i = 0; i < _diff; i++) {
        idString.unshift('0');
      }

      return idString.join('');
    };

    for (let i = 0; i < _id.length; i++) {
      const _index = hexMap.indexOf(_id.charAt(i)) + 1;
      mappedId = mappedId * _index > 1000 ? (mappedId * _index) % 1000 : mappedId * _index;
    }

    const _url = `https://image-stg.s3.us-west-2.amazonaws.com/link3/avatar/personal/${getStringId(mappedId)}.png`;

    return _url;
  }
  return '';
};

export default generateUrl;
