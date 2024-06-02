/** naver
 *
 * Description
 *   - Using Naver API
 *
 * Functions
 *   [X] papago
 *
 * Usages
 *   -
 *
 * Requirements
 *   - Create `파파고 API` account(Register at `naver.com`)
 *
 * References
 *   - [Papago 번역 API 레퍼런스](https://developers.naver.com/docs/papago/papago-nmt-api-reference.md)
 *   - [Papago 번역 API 구현 예제](https://developers.naver.com/docs/papago/papago-nmt-example-code.md)
 *   - [Naver Papago Translation API via Axios (Axios를 활용한 네이버 파파고 번역 API 예제 )](https://gist.github.com/wooramy/c081f171f0227fa9f8a86d590dc30e7f)
 * Authors
 *   - Moon In Learn <mooninlearn@gmail.com>
 *   - JnJsoft Ko <jnjsoft.ko@gmail.com>
 */
// & Import AREA
// &---------------------------------------------------------------------------
// ? External Modules
import axios from "axios";
import qs from "querystring";

// & Function AREA
// &---------------------------------------------------------------------------

/** papago
 * @note
 */
const papago = async (term: string = "안녕", source: string = "ko", target: string = "en") => {
  const url = "https://openapi.naver.com/v1/papago/n2mt";
  const params = qs.stringify({
    source: source,
    target: target,
    text: term,
  });

  const config = {
    headers: {
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "x-naver-client-id": "EbHI8uV7WoNeRW8COzk8",
      "x-naver-client-secret": "hJmIuYfKha",
    },
  };

  const response = await axios.post(url, params, config);

  return response.data.message.result.translatedText;
};

// & Export AREA
// &---------------------------------------------------------------------------
export {
  papago, // translate by papago
};

// & Test AREA
// &---------------------------------------------------------------------------
papago("안녕");
