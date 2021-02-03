import {useCallback, useEffect} from 'react';
import useSignIn from './useSignIn';
import dynamicLinks, {
  FirebaseDynamicLinksTypes,
} from '@react-native-firebase/dynamic-links';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useFirebaseLink = (): [boolean, boolean] => {
  const [onSignIn, ...signInInfo] = useSignIn();

  const handleDynamicLink = useCallback<
    (link: FirebaseDynamicLinksTypes.DynamicLink) => void
  >(
    async (link) => {
      const email = await AsyncStorage.getItem('email');
      onSignIn(link.url, email);
    },
    [onSignIn],
  );

  useEffect(() => {
    const unsubscribe = dynamicLinks().onLink(handleDynamicLink);

    return () => {
      unsubscribe();
    };
  }, [handleDynamicLink]);

  useEffect(() => {
    let unsubscribed = false;

    async function getInitialLink() {
      const initialLink = await dynamicLinks().getInitialLink();

      if (initialLink && !unsubscribed) {
        handleDynamicLink(initialLink);
      }
    }

    getInitialLink();

    return () => {
      unsubscribed = true;
    };

    // Remove handleDynamicLink from the deps array to avoid redundant calls.
    // This hook should be called only once, at start.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return signInInfo;
};

export default useFirebaseLink;
