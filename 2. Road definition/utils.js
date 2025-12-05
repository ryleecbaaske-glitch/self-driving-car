function lerp(A,B,t){
    return A+(B-A)*t;
}

function dist(A,B){
    return Math.hypot(A.x-B.x,A.y-B.y);
}