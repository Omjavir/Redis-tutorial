#Redis is an open-source in-memory storage, used as a distributed, in-memory key–value database, cache and message broker, with optional durability.

Redis stack is the gui of redis and is not used in the production environment, := using only for educational purpose

RUN the command `docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest
` to spin up a docker container

PORT 8001 is the redis gui which keeps track of key value pairs

RUN the command `docker exec -it {container-id} bash`

RUN the command `redis-cli ping` the output should be `Pong` which specifies that the redis server is connected with out terminal(cli)



``` cpp
#include <bits/stdc++.h>
using namespace std;

void bubbleSort(int arr[], int size){
    // base case
    if(size == 0 || size == 1){
        return;
    }
    
    for(int i = 0; i < size - 1; i++){
        if(arr[i] > arr[i + 1]){
            swap(arr[i], arr[i + 1]);
        }
    }
    
    bubbleSort(arr, size - 1);
}

int main(){
    int arr[10] = {23, 43, 22, 25, 28, 5, 9, 10, 34, 2};
    int size = sizeof(arr) / sizeof(arr[0]);
    bubbleSort(arr, size);
    for(int i = 0; i < size; i++){
        cout << arr[i] << " ";
    } cout << endl;
}

```