// 파일 읽기
import * as RNFS from 'react-native-fs';


// readFile(filepath: string, encoding?: string)
RNFS.readFile(filePath, 'ascii').then(res => {
  
})
.catch(err => {
  console.log(err.message, err.code);
});

/* 참고
https://dev-yakuza.posstree.com/ko/react-native/react-native-fs/
*/