export function getStoredUser() {
    try {
        const item = window.localStorage.getItem('userState'); // 저장 시 사용한 키
        if (!item) {
            return null;
        }
        return JSON.parse(item);
    } catch (error) {
        console.error('로컬 스토리지 읽기 에러:', error);
        return null;
    }
}

export function clearStoredUser() {
    window.localStorage.removeItem('userState');
}