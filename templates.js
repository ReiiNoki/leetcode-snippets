// --- templates.js ---

export const defaultSnippets = [
    {
        title: "开区间二分模板（求最小）",
        description: "寻找第一个 >= target 的位置。",
        data: {
"Python":
`class Solution:
    # 计算满足 check(x) == True 的最小整数 x
    def binarySearchMin(self, nums: List[int]) -> int:
        # 二分猜答案：判断 mid 是否满足题目要求
        def check(mid: int) -> bool:
            # TODO

        left =   # 循环不变量：check(left) 恒为 False
        right =   # 循环不变量：check(right) 恒为 True
        while left + 1 < right:  # 开区间不为空
            mid = (left + right) // 2
            if check(mid):  # 说明 check(>= mid 的数) 均为 True
                right = mid  # 接下来在 (left, mid) 中二分答案
            else:  # 说明 check(<= mid 的数) 均为 False
                left = mid  # 接下来在 (mid, right) 中二分答案
        # 循环结束后 left+1 = right
        # 此时 check(left) == False 而 check(left+1) == check(right) == True
        # 所以 right 就是最小的满足 check 的值
        return right`,

"Java":
`class Solution {
    // 计算满足 check(x) == true 的最小整数 x
    public int binarySearchMin(int[] nums) {
        int left = ; // 循环不变量：check(left) 恒为 false
        int right = ; // 循环不变量：check(right) 恒为 true
        while (left + 1 < right) { // 开区间不为空
            int mid = left + (right - left) / 2;
            if (check(mid, nums)) { // 说明 check(>= mid 的数) 均为 true
                right = mid; // 接下来在 (left, mid) 中二分答案
            } else { // 说明 check(<= mid 的数) 均为 false
                left = mid; // 接下来在 (mid, right) 中二分答案
            }
        }
        // 循环结束后 left+1 = right
        // 此时 check(left) == false 而 check(left+1) == check(right) == true
        // 所以 right 就是最小的满足 check 的值
        return right;
    }

    // 二分猜答案：判断 mid 是否满足题目要求
    private boolean check(int mid, int[] nums) {
        
    }
}`,

"C++":
`class Solution {
public:
    // 计算满足 check(x) == true 的最小整数 x
    int binarySearchMin(vector<int>& nums) {
        // 二分猜答案：判断 mid 是否满足题目要求
        auto check = [&](int mid) -> bool {
            
        };

        int left = ; // 循环不变量：check(left) 恒为 false
        int right = ; // 循环不变量：check(right) 恒为 true
        while (left + 1 < right) { // 开区间不为空
            int mid = left + (right - left) / 2;
            if (check(mid)) { // 说明 check(>= mid 的数) 均为 true
                right = mid; // 接下来在 (left, mid) 中二分答案
            } else { // 说明 check(<= mid 的数) 均为 false
                left = mid; // 接下来在 (mid, right) 中二分答案
            }
        }
        // 循环结束后 left+1 = right
        // 此时 check(left) == false 而 check(left+1) == check(right) == true
        // 所以 right 就是最小的满足 check 的值
        return right;
    }
};`,

"Go":
`// 计算满足 check(x) == true 的最小整数 x
func binarySearchMin(nums []int) int {
    // 二分猜答案：判断 mid 是否满足题目要求
    check := func(mid int) bool {
        
    }

    left :=  // 循环不变量：check(left) 恒为 false
    right :=  // 循环不变量：check(right) 恒为 true
    for left+1 < right { // 开区间不为空
        mid := left + (right-left)/2
		if check(mid) { // 说明 check(>= mid 的数) 均为 true
            right = mid // 接下来在 (left, mid) 中二分答案
        } else { // 说明 check(<= mid 的数) 均为 false
            left = mid // 接下来在 (mid, right) 中二分答案
        }
    }
    // 循环结束后 left+1 = right
    // 此时 check(left) == false 而 check(left+1) == check(right) == true
    // 所以 right 就是最小的满足 check 的值
    return right
}`
        }
    },
    {
        title: "开区间二分模板（求最大）",
        description: "",
        data: {
"Python":
`class Solution:
    # 计算满足 check(x) == True 的最大整数 x
    def binarySearchMax(self, nums: List[int]) -> int:
        # 二分猜答案：判断 mid 是否满足题目要求
        def check(mid: int) -> bool:
            # TODO

        left =   # 循环不变量：check(left) 恒为 True
        right =   # 循环不变量：check(right) 恒为 False
        while left + 1 < right:
            mid = (left + right) // 2
            if check(mid):
                left = mid  # 注意这里更新的是 left，和上面的模板反过来
            else:
                right = mid
        # 循环结束后 left+1 = right
        # 此时 check(left) == True 而 check(left+1) == check(right) == False
        # 所以 left 就是最大的满足 check 的值
        return left  # check 更新的是谁，最终就返回谁`,

"Java":
`class Solution {
    // 计算满足 check(x) == true 的最大整数 x
    public int binarySearchMax(int[] nums) {
        int left = ; // 循环不变量：check(left) 恒为 true
        int right = ; // 循环不变量：check(right) 恒为 false
        while (left + 1 < right) {
            int mid = left + (right - left) / 2;
            if (check(mid, nums)) {
                left = mid; // 注意这里更新的是 left，和上面的模板反过来
            } else {
                right = mid;
            }
        }
        // 循环结束后 left+1 = right
        // 此时 check(left) == true 而 check(left+1) == check(right) == false
        // 所以 left 就是最大的满足 check 的值
        return left; // check 更新的是谁，最终就返回谁
    }

    // 二分猜答案：判断 mid 是否满足题目要求
    private boolean check(int mid, int[] nums) {
        
    }
}`,

"C++":
`class Solution {
public:
    // 计算满足 check(x) == true 的最大整数 x
    int binarySearchMax(vector<int>& nums) {
        // 二分猜答案：判断 mid 是否满足题目要求
        auto check = [&](int mid) -> bool {
            
        };

        int left = ; // 循环不变量：check(left) 恒为 true
        int right = ; // 循环不变量：check(right) 恒为 false
        while (left + 1 < right) {
            int mid = left + (right - left) / 2;
            if (check(mid)) {
                left = mid; // 注意这里更新的是 left，和上面的模板反过来
            } else {
                right = mid;
            }
        }
        // 循环结束后 left+1 = right
        // 此时 check(left) == true 而 check(left+1) == check(right) == false
        // 所以 left 就是最大的满足 check 的值
        return left; // check 更新的是谁，最终就返回谁
    }
};`
        }
    },
    {
        title: "单调栈",
        data: {
"Python":
`def nearestGreater(nums: List[int]) -> Tuple[List[int], List[int]]:
    n = len(nums)
    # left[i] 是 nums[i] 左侧最近的严格大于 nums[i] 的数的下标，若不存在则为 -1
    left = [-1] * n
    st = []
    for i, x in enumerate(nums):
        while st and nums[st[-1]] <= x:  # 如果求严格小于，改成 >=
            st.pop()
        if st:
            left[i] = st[-1]
        st.append(i)

    # right[i] 是 nums[i] 右侧最近的严格大于 nums[i] 的数的下标，若不存在则为 n
    right = [n] * n
    st = []
    for i in range(n - 1, -1, -1):
        x = nums[i]
        while st and nums[st[-1]] <= x:
            st.pop()
        if st:
            right[i] = st[-1]
        st.append(i)

    return left, right`,

"Java":
`class Solution {
    private int[][] nearestGreater(int[] nums) {
        int n = nums.length;
        // left[i] 是 nums[i] 左侧最近的严格大于 nums[i] 的数的下标，若不存在则为 -1
        int[] left = new int[n];
        Deque<Integer> st = new ArrayDeque<>();
        st.push(-1); // 哨兵
        for (int i = 0; i < n; i++) {
            int x = nums[i];
            while (st.size() > 1 && nums[st.peek()] <= x) { // 如果求严格小于，改成 >=
                st.pop();
            }
            left[i] = st.peek();
            st.push(i);
        }

        // right[i] 是 nums[i] 右侧最近的严格大于 nums[i] 的数的下标，若不存在则为 n
        int[] right = new int[n];
        st.clear();
        st.push(n); // 哨兵
        for (int i = n - 1; i >= 0; i--) {
            int x = nums[i];
            while (st.size() > 1 && nums[st.peek()] <= x) {
                st.pop();
            }
            right[i] = st.peek();
            st.push(i);
        }

        return new int[][]{left, right};
    }
}`,

"C++":
`pair<vector<int>, vector<int>> nearestGreater(vector<int>& nums) {
    int n = nums.size();
    // left[i] 是 nums[i] 左侧最近的严格大于 nums[i] 的数的下标，若不存在则为 -1
    vector<int> left(n);
    vector<int> st{-1}; // 哨兵
    for (int i = 0; i < n; i++) {
        int x = nums[i];
        while (st.size() > 1 && nums[st.back()] <= x) { // 如果求严格小于，改成 >=
            st.pop_back();
        }
        left[i] = st.back();
        st.push_back(i);
    }

    // right[i] 是 nums[i] 右侧最近的严格大于 nums[i] 的数的下标，若不存在则为 n
    vector<int> right(n);
    st = {n}; // 哨兵
    for (int i = n - 1; i >= 0; i--) {
        int x = nums[i];
        while (st.size() > 1 && nums[st.back()] <= x) {
            st.pop_back();
        }
        right[i] = st.back();
        st.push_back(i);
    }

    return {left, right};
}`,

"Go":
`func nearestGreater(nums []int) ([]int, []int) {
	n := len(nums)
	// left[i] 是 nums[i] 左侧最近的严格大于 nums[i] 的数的下标，若不存在则为 -1
	left := make([]int, n)
	st := []int{-1} // 哨兵
	for i, x := range nums {
		for len(st) > 1 && nums[st[len(st)-1]] <= x { // 如果求严格小于，改成 >=
			st = st[:len(st)-1]
		}
		left[i] = st[len(st)-1]
		st = append(st, i)
	}

	// right[i] 是 nums[i] 右侧最近的严格大于 nums[i] 的数的下标，若不存在则为 n
	right := make([]int, n)
	st = []int{n} // 哨兵
	for i := n - 1; i >= 0; i-- {
		x := nums[i]
		for len(st) > 1 && nums[st[len(st)-1]] <= x {
			st = st[:len(st)-1]
		}
		right[i] = st[len(st)-1]
		st = append(st, i)
	}

	return left, right
}`
        }
    },
    {
        title: "AND/OR LogTrick",
        data: {
"Python":
`# 对于每个右端点 i，计算所有子数组的或值，打印这些或值的分布范围（子数组左端点范围）
# 时间复杂度 O(nlogU)，其中 U = max(nums)
def logTrick(nums: List[int]) -> None:
    or_left = []  # (子数组或值，最小左端点)
    for i, x in enumerate(nums):
        # 计算以 i 为右端点的子数组或值
        for p in or_left:
            p[0] |= x  # **根据题目修改**
        # x 单独一个数作为子数组
        or_left.append([x, i])

        # 原地去重（相同或值只保留最左边的）
        idx = 1
        for j in range(1, len(or_left)):
            if or_left[j][0] != or_left[j - 1][0]:
                or_left[idx] = or_left[j]
                idx += 1
        del or_left[idx:]

        print(i, x)
        for k, (or_val, left) in enumerate(or_left):
            right = or_left[k + 1][1] - 1 if k < len(or_left) - 1 else i
            # 对于左端点在 [left, right]，右端点为 i 的子数组，OR 值都是 or_val
            print(left, right, or_val)

logTrick([4, 2, 1, 5])`,

"Java":
`class Solution {
    // 对于每个右端点 i，计算所有子数组的或值，打印这些或值的分布范围（子数组左端点范围）
    // 时间复杂度 O(nlogU)，其中 U = max(nums)
    public void logTrick(int[] nums) {
        List<int[]> orLeft = new ArrayList<>(); // (子数组或值，最小左端点)
        for (int i = 0; i < nums.length; i++) {
            int x = nums[i];
            // 计算以 i 为右端点的子数组或值
            for (int[] p : orLeft) {
                p[0] |= x; // **根据题目修改**
            }
            // x 单独一个数作为子数组
            orLeft.add(new int[]{x, i});

            // 原地去重（相同或值只保留最左边的）
            int m = 1;
            for (int j = 1; j < orLeft.size(); j++) {
                if (orLeft.get(j)[0] != orLeft.get(j - 1)[0]) {
                    orLeft.set(m++, orLeft.get(j));
                }
            }
            orLeft.subList(m, orLeft.size()).clear();

            System.out.println(i + " " + x);
            for (int k = 0; k < m; k++) {
                int orVal = orLeft.get(k)[0];
                int left = orLeft.get(k)[1];
                int right = k < m - 1 ? orLeft.get(k + 1)[1] - 1 : i;
                // 对于左端点在 [left, right]，右端点为 i 的子数组，OR 值都是 orVal
                System.out.println(left + " " + right + " " + orVal);
            }
        }
    }

    public static void main(String[] args) {
        new Solution().logTrick(new int[]{4, 2, 1, 5});
    }
}`,

"C++":
`// 对于每个右端点 i，计算所有子数组的或值，打印这些或值的分布范围（子数组左端点范围）
// 时间复杂度 O(nlogU)，其中 U = max(nums)
void logTrick(vector<int>& nums) {
    vector<pair<int, int>> or_left; // (子数组或值，最小左端点)
    for (int i = 0; i < nums.size(); i++) {
        int x = nums[i];
        // 计算以 i 为右端点的子数组或值
        for (auto& [or_val, _] : or_left) {
            or_val |= x; // **根据题目修改**
        }
        // x 单独一个数作为子数组
        or_left.emplace_back(x, i);

        // 原地去重（相同或值只保留最左边的）
        int m = 1;
        for (int j = 1; j < or_left.size(); j++) {
            if (or_left[j].first != or_left[j - 1].first) {
                or_left[m++] = or_left[j];
            }
        }
        or_left.resize(m);

        cout << i << " " << x << endl;
        for (int k = 0; k < m; k++) {
            auto [or_val, left] = or_left[k];
            int right = k + 1 < m ? or_left[k + 1].second - 1 : i;
            // 对于左端点在 [left, right]，右端点为 i 的子数组，OR 值都是 or_val
            cout << left << " " << right << " " << or_val << endl;
        }
    }
}

int main() {
    vector<int> nums = {4, 2, 1, 5};
    logTrick(nums);
    return 0;
}`,

"Go":
`// 对于每个右端点 i，计算所有子数组的或值，打印这些或值的分布范围（子数组左端点范围）
// 时间复杂度 O(nlogU)，其中 U = max(nums)
func logTrick(nums []int) {
    type pair struct{ or, left int } // 子数组或值，最小左端点
    orLeft := []pair{}
    for i, x := range nums {
        // 计算以 i 为右端点的子数组或值
        for j := range orLeft {
            orLeft[j].or |= x // **根据题目修改**
        }
        // x 单独一个数作为子数组
        orLeft = append(orLeft, pair{x, i})

        // 原地去重（相同或值只保留最左边的）
        idx := 1
        for j := 1; j < len(orLeft); j++ {
            if orLeft[j].or != orLeft[j-1].or {
                orLeft[idx] = orLeft[j]
                idx++
            }
        }
        orLeft = orLeft[:idx]

        fmt.Println(i, x)
        for k, p := range orLeft {
            orVal := p.or
            left := p.left
            right := i
            if k < len(orLeft)-1 {
                right = orLeft[k+1].left - 1
            }
            // 对于左端点在 [left, right]，右端点为 i 的子数组，OR 值都是 orVal
            fmt.Println(left, right, orVal)
        }
    }
}

func main() {
    logTrick([]int{4, 2, 1, 5})
}`
        }
    },
    {
        title: "最大异或和",
        data: {
"Python":
`class XorBasis:
    # n 为值域最大值 U 的二进制长度，例如 U=1e9 时 n=30
    def __init__(self, n: int):
        self.b = [0] * n

    def insert(self, x: int) -> None:
        b = self.b
        # 从高到低遍历，保证计算 max_xor 的时候，参与 XOR 的基的最高位（或者说二进制长度）是互不相同的
        for i in range(len(b) - 1, -1, -1):
            if x >> i:  # 由于大于 i 的位都被我们异或成了 0，所以 x >> i 的结果只能是 0 或 1
                if b[i] == 0:  # x 和之前的基是线性无关的
                    b[i] = x  # 新增一个基，最高位为 i
                    return
                x ^= b[i]  # 保证每个基的二进制长度互不相同
        # 正常循环结束，此时 x=0，说明一开始的 x 可以被已有基表出，不是一个线性无关基

    def max_xor(self) -> int:
        b = self.b
        res = 0
        # 从高到低贪心：越高的位，越必须是 1
        # 由于每个位的基至多一个，所以每个位只需考虑异或一个基，若能变大，则异或之
        for i in range(len(b) - 1, -1, -1):
            if res ^ b[i] > res:  # 手写 max 更快
                res ^= b[i]
        return res`,

"Java":
`class XorBasis {
    private final int[] b;

    // n 为值域最大值 U 的二进制长度，例如 U=1e9 时 n=30
    public XorBasis(int n) {
        b = new int[n];
    }

    public void insert(int x) {
        // 从高到低遍历，保证计算 maxXor 的时候，参与 XOR 的基的最高位（或者说二进制长度）是互不相同的
        for (int i = b.length - 1; i >= 0; i--) {
            if ((x >> i) > 0) { // 由于大于 i 的位都被我们异或成了 0，所以 x >> i 的结果只能是 0 或 1
                if (b[i] == 0) { // x 和之前的基是线性无关的
                    b[i] = x; // 新增一个基，最高位为 i
                    return;
                }
                x ^= b[i]; // 保证每个基的二进制长度互不相同
            }
        }
        // 正常循环结束，此时 x=0，说明一开始的 x 可以被已有基表出，不是一个线性无关基
    }

    public int maxXor() {
        int res = 0;
        // 从高到低贪心：越高的位，越必须是 1
        // 由于每个位的基至多一个，所以每个位只需考虑异或一个基，若能变大，则异或之
        for (int i = b.length - 1; i >= 0; i--) {
            res = Math.max(res, res ^ b[i]);
        }
        return res;
    }
}`,

"C++":
`class XorBasis {
    vector<int> b;

public:
    // n 为值域最大值 U 的二进制长度，例如 U=1e9 时 n=30
    XorBasis(int n) : b(n) {}

    void insert(int x) {
        // 从高到低遍历，保证计算 max_xor 的时候，参与 XOR 的基的最高位（或者说二进制长度）是互不相同的
        for (int i = b.size() - 1; i >= 0; i--) {
            if (x >> i) { // 由于大于 i 的位都被我们异或成了 0，所以 x >> i 的结果只能是 0 或 1
                if (b[i] == 0) { // x 和之前的基是线性无关的
                    b[i] = x; // 新增一个基，最高位为 i
                    return;
                }
                x ^= b[i]; // 保证每个基的二进制长度互不相同
            }
        }
        // 正常循环结束，此时 x=0，说明一开始的 x 可以被已有基表出，不是一个线性无关基
    }

    int max_xor() {
        int res = 0;
        // 从高到低贪心：越高的位，越必须是 1
        // 由于每个位的基至多一个，所以每个位只需考虑异或一个基，若能变大，则异或之
        for (int i = b.size() - 1; i >= 0; i--) {
            res = max(res, res ^ b[i]);
        }
        return res;
    }
};`,

"Go":
`type xorBasis []int

// n 为值域最大值 U 的二进制长度，例如 U=1e9 时 n=30
func newXorBasis(n int) xorBasis {
    return make(xorBasis, n)
}

func (b xorBasis) insert(x int) {
    // 从高到低遍历，保证计算 maxXor 的时候，参与 XOR 的基的最高位（或者说二进制长度）是互不相同的
    for i := len(b) - 1; i >= 0; i-- {
        if x>>i == 0 { // 由于大于 i 的位都被我们异或成了 0，所以 x>>i 的结果只能是 0 或 1
            continue
        }
        if b[i] == 0 { // x 和之前的基是线性无关的
            b[i] = x // 新增一个基，最高位为 i
            return
        }
        x ^= b[i] // 保证每个基的二进制长度互不相同
    }
    // 正常循环结束，此时 x=0，说明一开始的 x 可以被已有基表出，不是一个线性无关基
}

func (b xorBasis) maxXor() (res int) {
    // 从高到低贪心：越高的位，越必须是 1
    // 由于每个位的基至多一个，所以每个位只需考虑异或一个基，若能变大，则异或之
    for i := len(b) - 1; i >= 0; i-- {
        res = max(res, res^b[i])
    }
    return
}`
        }
    },
    {
        title: "DFS",
        data: {
"Python":
`def solve(n: int, edges: List[List[int]]) -> List[int]:
    # 节点编号从 0 到 n-1
    g = [[] for _ in range(n)]
    for x, y in edges:
        g[x].append(y)
        g[y].append(x)  # 无向图

    vis = [False] * n

    def dfs(x: int) -> int:
        vis[x] = True  # 避免重复访问节点
        size = 1
        for y in g[x]:
            if not vis[y]:
                size += dfs(y)
        return size

    # 计算每个连通块的大小
    ans = []
    for i, b in enumerate(vis):
        if not b:  # i 没有访问过
            size = dfs(i)
            ans.append(size)
    return ans`,

"Java":
`class Solution {
    public List<Integer> solve(int n, int[][] edges) {
        // 节点编号从 0 到 n-1
        List<Integer>[] g = new ArrayList[n];
        Arrays.setAll(g, _ -> new ArrayList<>());
        for (int[] e : edges) {
            int x = e[0];
            int y = e[1];
            g[x].add(y);
            g[y].add(x); // 无向图
        }

        // 计算每个连通块的大小
        List<Integer> ans = new ArrayList<>();
        boolean[] vis = new boolean[n];
        for (int i = 0; i < n; i++) {
            if (!vis[i]) { // i 没有访问过
                int size = dfs(i, vis, g);
                ans.add(size);
            }
        }
        return ans;
    }

    private int dfs(int x, boolean[] vis, List<Integer>[] g) {
        vis[x] = true; // 避免重复访问节点
        int size = 1;
        for (int y : g[x]) {
            if (!vis[y]) {
                size += dfs(y, vis, g);
            }
        }
        return size;
    }
}`,

"C++":
`vector<int> solve(int n, vector<vector<int>>& edges) {
    // 节点编号从 0 到 n-1
    vector<vector<int>> g(n);
    for (auto& e : edges) {
        int x = e[0], y = e[1];
        g[x].push_back(y);
        g[y].push_back(x); // 无向图
    }

    vector<int8_t> vis(n);

    // lambda 递归
    auto dfs = [&](this auto&& dfs, int x) -> int {
        vis[x] = true; // 避免重复访问节点
        int size = 1;
        for (int y : g[x]) {
            if (!vis[y]) {
                size += dfs(y);
            }
        }
        return size;
    };

    // 计算每个连通块的大小
    vector<int> ans;
    for (int i = 0; i < n; i++) {
        if (!vis[i]) { // i 没有访问过
            int size = dfs(i);
            ans.push_back(size);
        }
    }
    return ans;
}`,

"Go":
`func solve(n int, edges [][]int) (ans []int) {
	// 节点编号从 0 到 n-1
	g := make([][]int, n)
	for _, e := range edges {
		x, y := e[0], e[1]
		g[x] = append(g[x], y)
		g[y] = append(g[y], x) // 无向图
	}

	vis := make([]bool, n)

	var dfs func(int) int
	dfs = func(x int) int {
		vis[x] = true // 避免重复访问节点
		size := 1
		for _, y := range g[x] {
			if !vis[y] {
				size += dfs(y)
			}
		}
		return size
	}

	// 计算每个连通块的大小
	for i, b := range vis {
		if !b { // i 没有访问过
			size := dfs(i)
			ans = append(ans, size)
		}
	}
	return
}`
        }
    },
    {
        title: "BFS",
        data: {
"Python":
`# 计算从 start 到各个节点的最短路长度
# 如果节点不可达，则最短路长度为 -1
# 节点编号从 0 到 n-1，边权均为 1
def bfs(n: int, edges: List[List[int]], start: int) -> List[int]:
    g = [[] for _ in range(n)]
    for x, y in edges:
        g[x].append(y)
        g[y].append(x)  # 无向图

    dis = [-1] * n  # -1 表示尚未访问到
    dis[start] = 0
    q = deque([start])
    while q:
        x = q.popleft()
        for y in g[x]:
            if dis[y] < 0:
                dis[y] = dis[x] + 1
                q.append(y)
    return dis`,

"Java":
`class Solution {
    // 计算从 start 到各个节点的最短路长度
    // 如果节点不可达，则最短路长度为 -1
    // 节点编号从 0 到 n-1，边权均为 1
    public int[] bfs(int n, int[][] edges, int start) {
        List<Integer>[] g = new ArrayList[n];
        Arrays.setAll(g, _ -> new ArrayList<>());
        for (int[] e : edges) {
            int x = e[0], y = e[1];
            g[x].add(y);
            g[y].add(x); // 无向图
        }

        int[] dis = new int[n];
        Arrays.fill(dis, -1); // -1 表示尚未访问到
        Queue<Integer> q = new ArrayDeque<>();
        dis[start] = 0;
        q.offer(start);
        while (!q.isEmpty()) {
            int x = q.poll();
            for (int y : g[x]) {
                if (dis[y] < 0) {
                    dis[y] = dis[x] + 1;
                    q.offer(y);
                }
            }
        }
        return dis;
    }
}`,

"C++":
`// 计算从 start 到各个节点的最短路长度
// 如果节点不可达，则最短路长度为 -1
// 节点编号从 0 到 n-1，边权均为 1
vector<int> bfs(int n, vector<vector<int>>& edges, int start) {
    vector<vector<int>> g(n);
    for (auto& e : edges) {
        int x = e[0], y = e[1];
        g[x].push_back(y);
        g[y].push_back(x); // 无向图
    }

    vector<int> dis(n, -1); // -1 表示尚未访问到
    queue<int> q;
    dis[start] = 0;
    q.push(start);
    while (!q.empty()) {
        int x = q.front();
        q.pop();
        for (int y : g[x]) {
            if (dis[y] < 0) {
                dis[y] = dis[x] + 1;
                q.push(y);
            }
        }
    }
    return dis;
}`,

"Go":
`// 计算从 start 到各个节点的最短路长度
// 如果节点不可达，则最短路长度为 -1
// 节点编号从 0 到 n-1，边权均为 1
func bfs(n int, edges [][]int, start int) []int {
	g := make([][]int, n)
	for _, e := range edges {
		x, y := e[0], e[1]
		g[x] = append(g[x], y)
		g[y] = append(g[y], x) // 无向图
	}

	dis := make([]int, n)
	for i := range dis {
		dis[i] = -1 // -1 表示尚未访问到
	}
	dis[start] = 0
	q := []int{start}
	for len(q) > 0 {
		x := q[0]
		q = q[1:]
		for _, y := range g[x] {
			if dis[y] < 0 {
				dis[y] = dis[x] + 1
				q = append(q, y)
			}
		}
	}
	return dis
}`
        }
    },
    {
        title: "拓扑排序",
        data: {
"Python":
`# 返回有向无环图（DAG）的其中一个拓扑序
# 如果图中有环，返回空列表
# 节点编号从 0 到 n-1
def topologicalSort(n: int, edges: List[List[int]]) -> List[int]:
    g = [[] for _ in range(n)]
    in_deg = [0] * n
    for x, y in edges:
        g[x].append(y)
        in_deg[y] += 1  # 统计 y 的先修课数量

    topo_order = []
    q = deque(i for i, d in enumerate(in_deg) if d == 0)  # 没有先修课，可以直接上
    while q:
        x = q.popleft()
        topo_order.append(x)
        for y in g[x]:
            in_deg[y] -= 1  # 修完 x 后，y 的先修课数量减一
            if in_deg[y] == 0:  # y 的先修课全部上完
                q.append(y)  # 加入学习队列

    if len(topo_order) < n:  # 图中有环
        return []
    return topo_order`,

"Java":
`class Solution {
    // 返回有向无环图（DAG）的其中一个拓扑序
    // 如果图中有环，返回空列表
    // 节点编号从 0 到 n-1
    public List<Integer> topologicalSort(int n, int[][] edges) {
        List<Integer>[] g = new ArrayList[n];
        Arrays.setAll(g, _ -> new ArrayList<>());
        int[] inDeg = new int[n];
        for (int[] e : edges) {
            int x = e[0];
            int y = e[1];
            g[x].add(y);
            inDeg[y]++; // 统计 y 的先修课数量
        }

        Queue<Integer> q = new ArrayDeque<>();
        for (int i = 0; i < n; i++) {
            if (inDeg[i] == 0) { // 没有先修课，可以直接上
                q.offer(i); // 加入学习队列
            }
        }

        List<Integer> topoOrder = new ArrayList<>();
        while (!q.isEmpty()) {
            int x = q.poll();
            topoOrder.add(x);
            for (int y : g[x]) {
                inDeg[y]--; // 修完 x 后，y 的先修课数量减一
                if (inDeg[y] == 0) { // y 的先修课全部上完
                    q.offer(y); // 加入学习队列
                }
            }
        }

        if (topoOrder.size() < n) { // 图中有环
            return List.of();
        }
        return topoOrder;
    }
}`,

"C++":
`// 返回有向无环图（DAG）的其中一个拓扑序
// 如果图中有环，返回空列表
// 节点编号从 0 到 n-1
vector<int> topologicalSort(int n, vector<vector<int>>& edges) {
    vector<vector<int>> g(n);
    vector<int> in_deg(n);
    for (auto& e : edges) {
        int x = e[0], y = e[1];
        g[x].push_back(y);
        in_deg[y]++; // 统计 y 的先修课数量
    }

    queue<int> q;
    for (int i = 0; i < n; i++) {
        if (in_deg[i] == 0) { // 没有先修课，可以直接上
            q.push(i); // 加入学习队列
        }
    }

    vector<int> topo_order;
    while (!q.empty()) {
        int x = q.front();
        q.pop();
        topo_order.push_back(x);
        for (int y : g[x]) {
            in_deg[y]--; // 修完 x 后，y 的先修课数量减一
            if (in_deg[y] == 0) { // y 的先修课全部上完
                q.push(y); // 加入学习队列
            }
        }
    }

    if (topo_order.size() < n) { // 图中有环
        return {};
    }
    return topo_order;
}`,

"Go":
`// 返回有向无环图（DAG）的其中一个拓扑序
// 如果图中有环，返回 nil
// 节点编号从 0 到 n-1
func topologicalSort(n int, edges [][]int) []int {
	g := make([][]int, n)
	inDeg := make([]int, n)
	for _, e := range edges {
		x, y := e[0], e[1]
		g[x] = append(g[x], y)
		inDeg[y]++ // 统计 y 的先修课数量
	}

	q := make([]int, 0, n)
	topoOrder := q
	for i, d := range inDeg {
		if d == 0 { // 没有先修课，可以直接上
			q = append(q, i) // 加入学习队列
		}
	}
	for len(q) > 0 {
		x := q[0]
		q = q[1:]
		for _, y := range g[x] {
			inDeg[y]-- // 修完 x 后， y 的先修课数量减一
			if inDeg[y] == 0 { // y 的先修课全部上完
				q = append(q, y) // 加入学习队列
			}
		}
	}

	if cap(q) > 0 { // 图中有环
		return nil
	}
	return topoOrder[:n]
}`
        }
    },
    {
        title: "Dijkstra 算法",
        data: {
"Python":
`# 返回从起点 start 到每个点的最短路长度 dis，如果节点 x 不可达，则 dis[x] = math.inf
# 要求：没有负数边权
# 时间复杂度 O(n + mlogm)，其中 m 是 edges 的长度。注意堆中有 O(m) 个元素
def shortestPathDijkstra(n: int, edges: List[List[int]], start: int) -> List[int]:
    # 注：如果节点编号从 1 开始（而不是从 0 开始），可以把 n 加一
    g = [[] for _ in range(n)]  # 邻接表
    for x, y, wt in edges:
        g[x].append((y, wt))
        # g[y].append((x, wt))  # 无向图加上这行

    dis = [inf] * n
    dis[start] = 0  # 起点到自己的距离是 0
    h = [(0, start)]  # 堆中保存 (起点到节点 x 的最短路长度，节点 x)

    while h:
        dis_x, x = heappop(h)
        if dis_x > dis[x]:  # x 之前出堆过
            continue
        for y, wt in g[x]:
            new_dis_y = dis_x + wt
            if new_dis_y < dis[y]:
                dis[y] = new_dis_y  # 更新 x 的邻居的最短路
                # 懒更新堆：只插入数据，不更新堆中数据
                # 相同节点可能有多个不同的 new_dis_y，除了最小的 new_dis_y，其余值都会触发上面的 continue
                heappush(h, (new_dis_y, y))

    return dis`,

"Java":
`class Solution {
    // 返回从起点 start 到每个点的最短路长度 dis，如果节点 x 不可达，则 dis[x] = Integer.MAX_VALUE
    // 要求：没有负数边权
    // 时间复杂度 O(n + mlogm)，注意堆中有 O(m) 个元素
    private int[] shortestPathDijkstra(int n, int[][] edges, int start) {
        // 注：如果节点编号从 1 开始（而不是从 0 开始），可以把 n 加一
        List<int[]>[] g = new ArrayList[n]; // 邻接表
        Arrays.setAll(g, _ -> new ArrayList<>());
        for (int[] e : edges) {
            int x = e[0];
            int y = e[1];
            int wt = e[2];
            g[x].add(new int[]{y, wt});
            // g[y].add(new int[]{x, wt}); // 无向图加上这行
        }

        int[] dis = new int[n]; // **如果数据范围大，改成 long[]**
        Arrays.fill(dis, Integer.MAX_VALUE);
        // 堆中保存 (起点到节点 x 的最短路长度，节点 x)
        PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(a -> a[0]));
        dis[start] = 0; // 起点到自己的距离是 0
        pq.offer(new int[]{0, start});

        while (!pq.isEmpty()) {
            int[] p = pq.poll();
            int disX = p[0];
            int x = p[1];
            if (disX > dis[x]) { // x 之前出堆过
                continue;
            }
            for (int[] e : g[x]) {
                int y = e[0];
                int wt = e[1];
                int newDisY = disX + wt;
                if (newDisY < dis[y]) {
                    dis[y] = newDisY; // 更新 x 的邻居的最短路
                    // 懒更新堆：只插入数据，不更新堆中数据
                    // 相同节点可能有多个不同的 newDisY，除了最小的 newDisY，其余值都会触发上面的 continue
                    pq.offer(new int[]{newDisY, y});
                }
            }
        }

        return dis;
    }
}`,

"C++":
`// 返回从起点 start 到每个点的最短路长度 dis，如果节点 x 不可达，则 dis[x] = LLONG_MAX
// 要求：没有负数边权
// 时间复杂度 O(n + mlogm)，注意堆中有 O(m) 个元素
vector<long long> shortestPathDijkstra(int n, vector<vector<int>>& edges, int start) {
    // 注：如果节点编号从 1 开始（而不是从 0 开始），可以把 n 加一
    vector<vector<pair<int, int>>> g(n); // 邻接表
    for (auto& e : edges) {
        int x = e[0], y = e[1], wt = e[2];
        g[x].emplace_back(y, wt);
        // g[y].emplace_back(x, wt); // 无向图加上这行
    }

    vector<long long> dis(n, LLONG_MAX);
    // 堆中保存 (起点到节点 x 的最短路长度，节点 x)
    priority_queue<pair<long long, int>, vector<pair<long long, int>>, greater<>> pq;
    dis[start] = 0; // 起点到自己的距离是 0
    pq.emplace(0, start);

    while (!pq.empty()) {
        auto [dis_x, x] = pq.top();
        pq.pop();
        if (dis_x > dis[x]) { // x 之前出堆过
            continue;
        }
        for (auto& [y, wt] : g[x]) {
            auto new_dis_y = dis_x + wt;
            if (new_dis_y < dis[y]) {
                dis[y] = new_dis_y; // 更新 x 的邻居的最短路
                // 懒更新堆：只插入数据，不更新堆中数据
                // 相同节点可能有多个不同的 new_dis_y，除了最小的 new_dis_y，其余值都会触发上面的 continue
                pq.emplace(new_dis_y, y);
            }
        }
    }

    return dis;
}`,

"Go":
`// 返回从起点 start 到每个点的最短路长度 dis，如果节点 x 不可达，则 dis[x] = math.MaxInt
// 要求：没有负数边权
// 时间复杂度 O(n + mlogm)，注意堆中有 O(m) 个元素
func shortestPathDijkstra(n int, edges [][]int, start int) []int {
    // 注：如果节点编号从 1 开始（而不是从 0 开始），可以把 n 加一
    type edge struct{ to, wt int }
    g := make([][]edge, n) // 邻接表
    for _, e := range edges {
        x, y, wt := e[0], e[1], e[2]
        g[x] = append(g[x], edge{y, wt})
        // g[y] = append(g[y], edge{x, wt}) // 无向图加上这行
    }

    dis := make([]int, n)
    for i := range dis {
        dis[i] = math.MaxInt
    }
    dis[start] = 0 // 起点到自己的距离是 0
    // 堆中保存 (起点到节点 x 的最短路长度，节点 x)
    h := &hp{{0, start}}

    for h.Len() > 0 {
        p := heap.Pop(h).(pair)
        disX, x := p.dis, p.x
        if disX > dis[x] { // x 之前出堆过
            continue
        }
        for _, e := range g[x] {
            y := e.to
            newDisY := disX + e.wt
            if newDisY < dis[y] {
                dis[y] = newDisY // 更新 x 的邻居的最短路
                // 懒更新堆：只插入数据，不更新堆中数据
                // 相同节点可能有多个不同的 newDisY，除了最小的 newDisY，其余值都会触发上面的 continue
                heap.Push(h, pair{newDisY, y})
            }
        }
    }

    return dis
}

type pair struct{ dis, x int }
type hp []pair

func (h hp) Len() int           { return len(h) }
func (h hp) Less(i, j int) bool { return h[i].dis < h[j].dis }
func (h hp) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }
func (h *hp) Push(v any)        { *h = append(*h, v.(pair)) }
func (h *hp) Pop() (v any)      { a := *h; *h, v = a[:len(a)-1], a[len(a)-1]; return }`
        }
    },
    {
        title: "Floyd 算法",
        data: {
"Python":
`# 返回一个二维列表，其中 (i,j) 这一项表示从 i 到 j 的最短路长度
# 如果无法从 i 到 j，则最短路长度为 math.inf
# 允许负数边权
# 如果计算完毕后，存在 i，使得从 i 到 i 的最短路长度小于 0，说明图中有负环
# 节点编号从 0 到 n-1
# 时间复杂度 O(n^3 + m)，其中 m 是 edges 的长度
def shortestPathFloyd(self, n: int, edges: List[List[int]]) -> List[List[int]]:
    f = [[inf] * n for _ in range(n)]
    for i in range(n):
        f[i][i] = 0

    for x, y, wt in edges:
        f[x][y] = min(f[x][y], wt)  # 如果有重边，取边权最小值
        f[y][x] = min(f[y][x], wt)  # 无向图

    for k in range(n):
        for i in range(n):
            if f[i][k] == inf:  # 针对稀疏图的优化
                continue
            for j in range(n):
                f[i][j] = min(f[i][j], f[i][k] + f[k][j])
    return f`,

"Java":
`class Solution {
    // 返回一个二维列表，其中 (i,j) 这一项表示从 i 到 j 的最短路长度
    // 如果无法从 i 到 j，则最短路长度为 Long.MAX_VALUE / 2
    // 允许负数边权
    // 如果计算完毕后，存在 i，使得从 i 到 i 的最短路长度小于 0，说明图中有负环
    // 节点编号从 0 到 n-1
    // 时间复杂度 O(n^3 + m)，其中 m 是 edges 的长度
    public long[][] shortestPathFloyd(int n, int[][] edges) {
        final long INF = Long.MAX_VALUE / 2; // 防止加法溢出
        long[][] f = new long[n][n];
        for (int i = 0; i < n; i++) {
            Arrays.fill(f[i], INF);
            f[i][i] = 0;
        }

        for (int[] e : edges) {
            int x = e[0];
            int y = e[1];
            int wt = e[2];
            f[x][y] = Math.min(f[x][y], wt); // 如果有重边，取边权最小值
            f[y][x] = Math.min(f[y][x], wt); // 无向图
        }

        for (int k = 0; k < n; k++) {
            for (int i = 0; i < n; i++) {
                if (f[i][k] == INF) { // 针对稀疏图的优化
                    continue;
                }
                for (int j = 0; j < n; j++) {
                    f[i][j] = Math.min(f[i][j], f[i][k] + f[k][j]);
                }
            }
        }
        return f;
    }
}`,

"C++":
`// 返回一个二维列表，其中 (i,j) 这一项表示从 i 到 j 的最短路长度
// 如果无法从 i 到 j，则最短路长度为 LLONG_MAX / 2
// 允许负数边权
// 如果计算完毕后，存在 i，使得从 i 到 i 的最短路长度小于 0，说明图中有负环
// 节点编号从 0 到 n-1
// 时间复杂度 O(n^3 + m)，其中 m 是 edges 的长度
vector<vector<long long>> shortestPathFloyd(int n, vector<vector<int>>& edges) {
    const long long INF = LLONG_MAX / 2; // 防止加法溢出
    vector f(n, vector<long long>(n, INF));
    for (int i = 0; i < n; i++) {
        f[i][i] = 0;
    }

    for (auto& e : edges) {
        int x = e[0], y = e[1];
        long long wt = e[2];
        f[x][y] = min(f[x][y], wt); // 如果有重边，取边权最小值
        f[y][x] = min(f[y][x], wt); // 无向图
    }

    for (int k = 0; k < n; k++) {
        for (int i = 0; i < n; i++) {
            if (f[i][k] == INF) { // 针对稀疏图的优化
                continue;
            }
            for (int j = 0; j < n; j++) {
                f[i][j] = min(f[i][j], f[i][k] + f[k][j]);
            }
        }
    }
    return f;
}`,

"Go":
`// 返回一个二维列表，其中 (i,j) 这一项表示从 i 到 j 的最短路长度
// 如果无法从 i 到 j，则最短路长度为 math.MaxInt / 2
// 允许负数边权
// 如果计算完毕后，存在 i，使得从 i 到 i 的最短路长度小于 0，说明图中有负环
// 节点编号从 0 到 n-1
// 时间复杂度 O(n^3 + m)，其中 m 是 edges 的长度
func shortestPathFloyd(n int, edges [][]int) [][]int {
	const inf = math.MaxInt / 2 // 防止加法溢出
	f := make([][]int, n)
	for i := range f {
		f[i] = make([]int, n)
		for j := range f[i] {
			f[i][j] = inf
		}
		f[i][i] = 0
	}

	for _, e := range edges {
		x, y, wt := e[0], e[1], e[2]
		f[x][y] = min(f[x][y], wt) // 如果有重边，取边权最小值
		f[y][x] = min(f[y][x], wt) // 无向图
	}

	for k := range n {
		for i := range n {
			if f[i][k] == inf { // 针对稀疏图的优化
				continue
			}
			for j := range n {
				f[i][j] = min(f[i][j], f[i][k]+f[k][j])
			}
		}
	}
	return f
}`
        }
    },
    {
        title: "并查集 Kruskal 算法",
        data: {
"Python":
`class UnionFind:
    def __init__(self, n: int):
        # 一开始有 n 个集合 {0}, {1}, ..., {n-1}
        # 集合 i 的代表元是自己
        self._fa = list(range(n))  # 代表元
        self.cc = n  # 连通块个数

    # 返回 x 所在集合的代表元
    # 同时做路径压缩，也就是把 x 所在集合中的所有元素的 fa 都改成代表元
    def find(self, x: int) -> int:
        # 如果 fa[x] == x，则表示 x 是代表元
        if self._fa[x] != x:
            self._fa[x] = self.find(self._fa[x])  # fa 改成代表元
        return self._fa[x]

    # 把 from 所在集合合并到 to 所在集合中
    # 返回是否合并成功
    def merge(self, from_: int, to: int) -> bool:
        x, y = self.find(from_), self.find(to)
        if x == y:  # from 和 to 在同一个集合，不做合并
            return False
        self._fa[x] = y  # 合并集合。修改后就可以认为 from 和 to 在同一个集合了
        self.cc -= 1  # 成功合并，连通块个数减一
        return True


# 计算图的最小生成树的边权之和
# 如果图不连通，返回 math.inf
# 节点编号从 0 到 n-1
# 时间复杂度 O(n + mlogm)，其中 m 是 edges 的长度
def mstKruskal(n: int, edges: List[List[int]]) -> int:
    edges.sort(key=lambda e: e[2])

    uf = UnionFind(n)
    sum_wt = 0
    for x, y, wt in edges:
        if uf.merge(x, y):
            sum_wt += wt

    if uf.cc > 1:  # 图不连通
        return inf
    return sum_wt`,

"Java":
`class UnionFind {
    private final int[] fa; // 代表元
    public int cc; // 连通块个数

    UnionFind(int n) {
        // 一开始有 n 个集合 {0}, {1}, ..., {n-1}
        // 集合 i 的代表元是自己
        fa = new int[n];
        for (int i = 0; i < n; i++) {
            fa[i] = i;
        }
        cc = n;
    }

    // 返回 x 所在集合的代表元
    // 同时做路径压缩，也就是把 x 所在集合中的所有元素的 fa 都改成代表元
    public int find(int x) {
        // 如果 fa[x] == x，则表示 x 是代表元
        if (fa[x] != x) {
            fa[x] = find(fa[x]); // fa 改成代表元
        }
        return fa[x];
    }

    // 把 from 所在集合合并到 to 所在集合中
    // 返回是否合并成功
    public boolean merge(int from, int to) {
        int x = find(from);
        int y = find(to);
        if (x == y) { // from 和 to 在同一个集合，不做合并
            return false;
        }
        fa[x] = y; // 合并集合。修改后就可以认为 from 和 to 在同一个集合了
        cc--; // 成功合并，连通块个数减一
        return true;
    }
}

class Solution {
    // 计算图的最小生成树的边权之和
    // 如果图不连通，返回 Long.MAX_VALUE
    // 节点编号从 0 到 n-1
    // 时间复杂度 O(n + mlogm)，其中 m 是 edges 的长度
    public long mstKruskal(int n, int[][] edges) {
        Arrays.sort(edges, Comparator.comparingInt(e -> e[2]));

        UnionFind uf = new UnionFind(n);
        long sumWt = 0;
        for (int[] e : edges) {
            int x = e[0], y = e[1], wt = e[2];
            if (uf.merge(x, y)) {
                sumWt += wt;
            }
        }

        if (uf.cc > 1) { // 图不连通
            return Long.MAX_VALUE;
        }
        return sumWt;
    }
}`,

"C++":
`class UnionFind {
    vector<int> fa; // 代表元

public:
    int cc; // 连通块个数

    UnionFind(int n) : fa(n), cc(n) {
        // 一开始有 n 个集合 {0}, {1}, ..., {n-1}
        // 集合 i 的代表元是自己
        ranges::iota(fa, 0);
    }

    // 返回 x 所在集合的代表元
    // 同时做路径压缩，也就是把 x 所在集合中的所有元素的 fa 都改成代表元
    int find(int x) {
        // 如果 fa[x] == x，则表示 x 是代表元
        if (fa[x] != x) {
            fa[x] = find(fa[x]); // fa 改成代表元
        }
        return fa[x];
    }

    // 把 from 所在集合合并到 to 所在集合中
    // 返回是否合并成功
    bool merge(int from, int to) {
        int x = find(from), y = find(to);
        if (x == y) { // from 和 to 在同一个集合，不做合并
            return false;
        }
        fa[x] = y; // 合并集合。修改后就可以认为 from 和 to 在同一个集合了
        cc--; // 成功合并，连通块个数减一
        return true;
    }
};

// 计算图的最小生成树的边权之和
// 如果图不连通，返回 LLONG_MAX
// 节点编号从 0 到 n-1
// 时间复杂度 O(n + mlogm)，其中 m 是 edges 的长度
long long mstKruskal(int n, vector<vector<int>>& edges) {
    ranges::sort(edges, {}, [](const auto& e) { return e[2]; });

    UnionFind uf(n);
    long long sum_wt = 0;
    for (auto& e : edges) {
        int x = e[0], y = e[1], wt = e[2];
        if (uf.merge(x, y)) {
            sum_wt += wt;
        }
    }

    if (uf.cc > 1) { // 图不连通
        return LLONG_MAX;
    }
    return sum_wt;
}`,

"Go":
`type unionFind struct {
	fa []int // 代表元
	cc int   // 连通块个数
}

func newUnionFind(n int) unionFind {
	fa := make([]int, n)
	// 一开始有 n 个集合 {0}, {1}, ..., {n-1}
	// 集合 i 的代表元是自己
	for i := range fa {
		fa[i] = i
	}
	return unionFind{fa, n}
}

// 返回 x 所在集合的代表元
// 同时做路径压缩，也就是把 x 所在集合中的所有元素的 fa 都改成代表元
func (u unionFind) find(x int) int {
	// 如果 fa[x] == x，则表示 x 是代表元
	if u.fa[x] != x {
		u.fa[x] = u.find(u.fa[x]) // fa 改成代表元
	}
	return u.fa[x]
}

// 把 from 所在集合合并到 to 所在集合中
// 返回是否合并成功
func (u *unionFind) merge(from, to int) bool {
	x, y := u.find(from), u.find(to)
	if x == y { // from 和 to 在同一个集合，不做合并
		return false
	}
	u.fa[x] = y // 合并集合。修改后就可以认为 from 和 to 在同一个集合了
	u.cc--      // 成功合并，连通块个数减一
	return true
}

// 计算图的最小生成树的边权之和
// 如果图不连通，返回 math.MaxInt
// 节点编号从 0 到 n-1
// 时间复杂度 O(n + mlogm)，其中 m 是 edges 的长度
func mstKruskal(n int, edges [][]int) int {
	slices.SortFunc(edges, func(a, b []int) int { return a[2] - b[2] })

	uf := newUnionFind(n)
	sumWt := 0
	for _, e := range edges {
		x, y, wt := e[0], e[1], e[2]
		if uf.merge(x, y) {
			sumWt += wt
		}
	}

	if uf.cc > 1 { // 图不连通
		return math.MaxInt
	}
	return sumWt
}`
        }
    },
    {
        title: "二分图染色（交叉染色法）",
        data: {
"Python":
`# 返回图的二染色
# 如果是二分图，返回每个节点的颜色，用 1 和 2 表示两种颜色
# 如果不是二分图，返回空列表
# 时间复杂度 O(n+m)，n 是点数，m 是边数
def colorBipartite(n: int, edges: List[List[int]]) -> List[int]:
    # 建图（节点编号从 0 到 n-1）
    g = [[] for _ in range(n)]
    for x, y in edges:
        g[x].append(y)
        g[y].append(x)

    # colors[i] = 0 表示未访问节点 i
    # colors[i] = 1 表示节点 i 为红色
    # colors[i] = 2 表示节点 i 为蓝色
    colors = [0] * n

    def dfs(x: int, c: int) -> bool:
        colors[x] = c  # 节点 x 染成颜色 c
        for y in g[x]:
            # 邻居 y 的颜色与 x 的相同，说明不是二分图，返回 False
            # 或者继续递归，发现不是二分图，返回 False
            if colors[y] == c or \
               colors[y] == 0 and not dfs(y, 3 - c):  # 1 和 2 交替染色
                return False
        return True

    # 可能有多个连通块
    for i, c in enumerate(colors):
        if c == 0 and not dfs(i, 1):
            # 从节点 i 开始递归，发现 i 所在连通块不是二分图
            return []
    return colors`,

"Java":
`class Solution {
    // 返回图的二染色
    // 如果是二分图，返回每个节点的颜色，用 1 和 2 表示两种颜色
    // 如果不是二分图，返回空列表
    // 时间复杂度 O(n+m)，n 是点数，m 是边数
    private int[] colorBipartite(int n, int[][] edges) {
        // 建图（节点编号从 0 到 n-1）
        List<Integer>[] g = new ArrayList[n];
        Arrays.setAll(g, _ -> new ArrayList<>());
        for (int[] e : edges) {
            int x = e[0], y = e[1];
            g[x].add(y);
            g[y].add(x);
        }

        // colors[i] = 0 表示未访问节点 i
        // colors[i] = 1 表示节点 i 为红色
        // colors[i] = 2 表示节点 i 为蓝色
        int[] colors = new int[n];

        for (int i = 0; i < n; i++) {
            if (colors[i] == 0 && !dfs(i, 1, g, colors)) {
                // 从节点 i 开始递归，发现 i 所在连通块不是二分图
                return new int[]{};
            }
        }
        return colors;
    }

    private boolean dfs(int x, int c, List<Integer>[] g, int[] colors) {
        colors[x] = c; // 节点 x 染成颜色 c
        for (int y : g[x]) {
            // 邻居 y 的颜色与 x 的相同，说明不是二分图，返回 false
            // 或者继续递归，发现不是二分图，返回 false
            if (colors[y] == c || 
                colors[y] == 0 && !dfs(y, 3 - c, g, colors)) { // 1 和 2 交替染色
                return false;
            }
        }
        return true;
    }
}`,

"C++":
`// 返回图的二染色
// 如果是二分图，返回每个节点的颜色，用 1 和 2 表示两种颜色
// 如果不是二分图，返回空列表
// 时间复杂度 O(n+m)，n 是点数，m 是边数
vector<int8_t> colorBipartite(int n, vector<vector<int>>& edges) {
    // 建图（节点编号从 0 到 n-1）
    vector<vector<int>> g(n);
    for (auto& e : edges) {
        int x = e[0], y = e[1];
        g[x].push_back(y);
        g[y].push_back(x);
    }

    // colors[i] = 0 表示未访问节点 i
    // colors[i] = 1 表示节点 i 为红色
    // colors[i] = 2 表示节点 i 为蓝色
    vector<int8_t> colors(n);

    // lambda 递归
    auto dfs = [&](this auto&& dfs, int x, int8_t c) -> bool {
        colors[x] = c; // 节点 x 染成颜色 c
        for (int y : g[x]) {
            // 邻居 y 的颜色与 x 的相同，说明不是二分图，返回 false
            // 或者继续递归，发现不是二分图，返回 false
            if (colors[y] == c || 
                colors[y] == 0 && !dfs(y, 3 - c)) { // 1 和 2 交替染色
                return false;
            }
        }
        return true;
    };

    // 可能有多个连通块
    for (int i = 0; i < n; i++) {
        if (colors[i] == 0 && !dfs(i, 1)) {
            // 从节点 i 开始递归，发现 i 所在连通块不是二分图
            return {};
        }
    }
    return colors;
}`,

"Go":
`// 返回图的二染色
// 如果是二分图，返回每个节点的颜色，用 1 和 2 表示两种颜色
// 如果不是二分图，返回空列表
// 时间复杂度 O(n+m)，n 是点数，m 是边数
func colorBipartite(n int, edges [][]int) []int8 {
    // 建图（节点编号从 0 到 n-1）
    g := make([][]int, n)
    for _, e := range edges {
        x, y := e[0], e[1]
        g[x] = append(g[x], y)
        g[y] = append(g[y], x)
    }

    // colors[i] = 0 表示未访问节点 i
    // colors[i] = 1 表示节点 i 为红色
    // colors[i] = 2 表示节点 i 为蓝色
    colors := make([]int8, n)

    var dfs func(int, int8) bool
    dfs = func(x int, c int8) bool {
        colors[x] = c // 节点 x 染成颜色 c
        for _, y := range g[x] {
            // 邻居 y 的颜色与 x 的相同，说明不是二分图，返回 false
            // 或者继续递归，发现不是二分图，返回 false
            if colors[y] == c ||
                colors[y] == 0 && !dfs(y, 3-c) { // 1 和 2 交替染色
                return false
            }
        }
        return true
    }

    // 可能有多个连通块
    for i, c := range colors {
        if c == 0 && !dfs(i, 1) {
            // 从节点 i 开始递归，发现 i 所在连通块不是二分图
            return nil
        }
    }
    return colors
}`
        }
    },
    {
        title: "子集和 DP（从子集转移过来）",
        data: {
"Python":
`# 设 w 为 a[i] 的二进制最大长度
# 返回一个长为 2^w 的数组 f，其中 f[S] 表示 a 中是 S 的子集的元素个数（把二进制数视作集合）
# 时间复杂度 O(n + U log U)，其中 U = max(a)
def sos_dp(a: List[int]) -> List[int]:
    mx = max(a)
    w = mx.bit_length()  # 二进制长度上限
    u = 1 << w

    f = [0] * u
    for x in a:
        f[x] += 1  # 初始值

    for i in range(w):
        bit = 1 << i
        s = 0
        while s < u:
            s |= bit  # 优化：快速跳到 i 位是 1 的 s
            f[s] += f[s ^ bit]
            s += 1
    return f`,

"Java":
`class Solution {
    // 设 w 为 a[i] 的二进制最大长度
    // 返回一个长为 2^w 的数组 f，其中 f[S] 表示 a 中是 S 的子集的元素个数（把二进制数视作集合）
    // 时间复杂度 O(n + U log U)，其中 U = max(a)
    public int[] sosDP(int[] a) {
        int mx = 0;
        for (int x : a) {
            mx = Math.max(mx, x);
        }

        int w = 32 - Integer.numberOfLeadingZeros(mx); // 二进制长度上限
        int[] f = new int[1 << w];
        for (int x : a) {
            f[x]++; // 初始值
        }

        for (int i = 0; i < w; i++) {
            for (int s = 0; s < (1 << w); s++) {
                s |= 1 << i; // 优化：快速跳到 i 位是 1 的 s
                f[s] += f[s ^ (1 << i)];
            }
        }
        return f;
    }
}`,

"C++":
`// 设 w 为 a[i] 的二进制最大长度
// 返回一个长为 2^w 的数组 f，其中 f[S] 表示 a 中是 S 的子集的元素个数（把二进制数视作集合）
// 时间复杂度 O(n + U log U)，其中 U = max(a)
vector<int> sos_dp(vector<int>& a) {
    int mx = ranges::max(a);
    int w = bit_width((uint32_t) mx); // 二进制长度上限

    vector<int> f(1 << w);
    for (int x : a) {
        f[x]++; // 初始值
    }

    for (int i = 0; i < w; i++) {
        for (int s = 0; s < (1 << w); s++) {
            s |= 1 << i; // 优化：快速跳到 i 位是 1 的 s
            f[s] += f[s ^ (1 << i)];
        }
    }
    return f;
}`,

"Go":
`// 设 w 为 a[i] 的二进制最大长度
// 返回一个长为 2^w 的数组 f，其中 f[S] 表示 a 中是 S 的子集的元素个数（把二进制数视作集合）
// 时间复杂度 O(n + U log U)，其中 U = max(a)
func sosDP(a []int) []int {
    mx := slices.Max(a)
    w := bits.Len(uint(mx)) // 二进制长度上限

    f := make([]int, 1<<w)
    for _, x := range a {
        f[x]++ // 初始值
    }

    for i := range w {
        for s := 0; s < 1<<w; s++ {
            s |= 1 << i // 优化：快速跳到 i 位是 1 的 s
            f[s] += f[s^1<<i]
        }
    }
    return f
}`
        }
    },
    {
        title: "子集和 DP（从超集转移过来）",
        data: {
"Python":
`# 设 w 为 a[i] 的二进制最大长度
# 返回一个长为 2^w 的数组 f，其中 f[S] 表示 a 中是 S 的超集的元素个数（把二进制数视作集合）
# 时间复杂度 O(n + U log U)，其中 U = max(a)
def sos_dp(a: List[int]) -> List[int]:
    mx = max(a)
    w = mx.bit_length()  # 二进制长度上限
    u = 1 << w

    f = [0] * u
    for x in a:
        f[x] += 1  # 初始值

    for i in range(w):
        bit = 1 << i
        s = 0
        while s < u:
            s |= bit  # 优化：快速跳到 i 位是 1 的 s
            f[s ^ bit] += f[s]
            s += 1
    return f`,

"Java":
`class Solution {
    // 设 w 为 a[i] 的二进制最大长度
    // 返回一个长为 2^w 的数组 f，其中 f[S] 表示 a 中是 S 的超集的元素个数（把二进制数视作集合）
    // 时间复杂度 O(n + U log U)，其中 U = max(a)
    public int[] sosDP(int[] a) {
        int mx = 0;
        for (int x : a) {
            mx = Math.max(mx, x);
        }

        int w = 32 - Integer.numberOfLeadingZeros(mx); // 二进制长度上限
        int[] f = new int[1 << w];
        for (int x : a) {
            f[x]++; // 初始值
        }

        for (int i = 0; i < w; i++) {
            for (int s = 0; s < (1 << w); s++) {
                s |= 1 << i; // 优化：快速跳到 i 位是 1 的 s
                f[s ^ (1 << i)] += f[s];
            }
        }
        return f;
    }
}`,

"C++":
`// 设 w 为 a[i] 的二进制最大长度
// 返回一个长为 2^w 的数组 f，其中 f[S] 表示 a 中是 S 的超集的元素个数（把二进制数视作集合）
// 时间复杂度 O(n + U log U)，其中 U = max(a)
vector<int> sos_dp(vector<int>& a) {
    int mx = ranges::max(a);
    int w = bit_width((uint32_t) mx); // 二进制长度上限

    vector<int> f(1 << w);
    for (int x : a) {
        f[x]++; // 初始值
    }

    for (int i = 0; i < w; i++) {
        for (int s = 0; s < (1 << w); s++) {
            s |= 1 << i; // 优化：快速跳到 i 位是 1 的 s
            f[s ^ (1 << i)] += f[s];
        }
    }
    return f;
}`,

"Go":
`// 设 w 为 a[i] 的二进制最大长度
// 返回一个长为 2^w 的数组 f，其中 f[S] 表示 a 中是 S 的超集的元素个数（把二进制数视作集合）
// 时间复杂度 O(n + U log U)，其中 U = max(a)
func sosDP(a []int) []int {
    mx := slices.Max(a)
    w := bits.Len(uint(mx)) // 二进制长度上限

    f := make([]int, 1<<w)
    for _, x := range a {
        f[x]++ // 初始值
    }

    for i := range w {
        for s := 0; s < 1<<w; s++ {
            s |= 1 << i // 优化：快速跳到 i 位是 1 的 s
            f[s^1<<i] += f[s]
        }
    }
    return f
}`
        }
    },
    {
        title: "数位DP 2.1",
        data: {
"Python":
`# 代码示例：返回 [low, high] 中的恰好包含 target 个 0 的数字个数
# 比如 digitDP(0, 10, 1) == 2
# 要点：我们统计的是 0 的个数，需要区分【前导零】和【数字中的零】，前导零不能计入，而数字中的零需要计入
def digitDP(low: int, high: int, target: int) -> int:
    low_s = list(map(int, str(low)))  # 避免在 dfs 中频繁调用 int()
    high_s = list(map(int, str(high)))
    n = len(high_s)
    diff_lh = n - len(low_s)

    @cache
    def dfs(i: int, cnt0: int, limit_low: bool, limit_high: bool) -> int:
        if cnt0 > target:
            return 0  # 不合法
        if i == n:
            return 1 if cnt0 == target else 0

        lo = low_s[i - diff_lh] if limit_low and i >= diff_lh else 0
        hi = high_s[i] if limit_high else 9

        res = 0
        start = lo

        # 通过 limit_low 和 i 可以判断能否不填数字，无需 is_num 参数
        # 如果前导零不影响答案，去掉这个 if block
        if limit_low and i < diff_lh:
            # 不填数字，上界不受约束
            res = dfs(i + 1, 0, True, False)
            start = 1

        for d in range(start, hi + 1):
            res += dfs(i + 1,
                       cnt0 + (1 if d == 0 else 0),  # 统计 0 的个数
                       limit_low and d == lo,
                       limit_high and d == hi)

        # res %= MOD
        return res

    return dfs(0, 0, True, True)`,

"Java":
`// 代码示例：返回 [low, high] 中的恰好包含 target 个 0 的数字个数
// 比如 digitDP(0, 10, 1) == 2
// 要点：我们统计的是 0 的个数，需要区分【前导零】和【数字中的零】，前导零不能计入，而数字中的零需要计入
class Solution {
    public long digitDP(long low, long high, int target) {
        char[] lowS = String.valueOf(low).toCharArray();
        char[] highS = String.valueOf(high).toCharArray();

        int n = highS.length;
        long[][] memo = new long[n][target + 1];
        for (long[] row : memo) {
            Arrays.fill(row, -1);
        }

        return dfs(0, 0, true, true, lowS, highS, target, memo);
    }

    private long dfs(int i, int cnt0, boolean limitLow, boolean limitHigh, char[] lowS, char[] highS, int target, long[][] memo) {
        if (cnt0 > target) {
            return 0; // 不合法
        }
        if (i == highS.length) {
            return cnt0 == target ? 1 : 0;
        }

        if (!limitLow && !limitHigh && memo[i][cnt0] >= 0) {
            return memo[i][cnt0];
        }

        int diff = highS.length - lowS.length;
        int lo = limitLow && i >= diff ? lowS[i - diff] - '0' : 0;
        int hi = limitHigh ? highS[i] - '0' : 9;

        long res = 0;
        int d = lo;

        // 通过 limitLow 和 i 可以判断能否不填数字，无需 isNum 参数
        // 如果前导零不影响答案，去掉这个 if block
        if (limitLow && i < diff) {
            // 不填数字，上界不受约束
            res = dfs(i + 1, 0, true, false, lowS, highS, target, memo);
            d = 1;
        }

        for (; d <= hi; d++) {
            res += dfs(i + 1,
                       cnt0 + (d == 0 ? 1 : 0), // 统计 0 的个数
                       limitLow && d == lo,
                       limitHigh && d == hi,
                       lowS, highS, target, memo);
            // res %= MOD;
        }

        if (!limitLow && !limitHigh) {
            memo[i][cnt0] = res;
        }
        return res;
    }
}`,

"C++":
`// 代码示例：返回 [low, high] 中的恰好包含 target 个 0 的数字个数
// 比如 digitDP(0, 10, 1) == 2
// 要点：我们统计的是 0 的个数，需要区分【前导零】和【数字中的零】，前导零不能计入，而数字中的零需要计入
long long digitDP(long long low, long long high, int target) {
    string low_s = to_string(low);
    string high_s = to_string(high);
    int n = high_s.size();
    int diff_lh = n - low_s.size();
    vector memo(n, vector<long long>(target + 1, -1));

    auto dfs = [&](this auto&& dfs, int i, int cnt0, bool limit_low, bool limit_high) -> long long {
        if (cnt0 > target) {
            return 0; // 不合法
        }
        if (i == n) {
            return cnt0 == target;
        }

        if (!limit_low && !limit_high && memo[i][cnt0] >= 0) {
            return memo[i][cnt0];
        }

        int lo = limit_low && i >= diff_lh ? low_s[i - diff_lh] - '0' : 0;
        int hi = limit_high ? high_s[i] - '0' : 9;

        long long res = 0;
        int d = lo;

        // 通过 limit_low 和 i 可以判断能否不填数字，无需 is_num 参数
        // 如果前导零不影响答案，去掉这个 if block
        if (limit_low && i < diff_lh) {
            // 不填数字，上界不受约束
            res = dfs(i + 1, 0, true, false);
            d = 1;
        }

        for (; d <= hi; d++) {
            // 统计 0 的个数
            res += dfs(i + 1, cnt0 + (d == 0), limit_low && d == lo, limit_high && d == hi);
            // res %= MOD;
        }

        if (!limit_low && !limit_high) {
            memo[i][cnt0] = res;
        }
        return res;
    };

    return dfs(0, 0, true, true);
}`,

"Go":
`// 代码示例：返回 [low, high] 中的恰好包含 target 个 0 的数字个数
// 比如 digitDP(0, 10, 1) == 2
// 要点：我们统计的是 0 的个数，需要区分【前导零】和【数字中的零】，前导零不能计入，而数字中的零需要计入
func digitDP(low, high int, target int) int {
    lowS := strconv.Itoa(low)
    highS := strconv.Itoa(high)
    n := len(highS)
    diffLH := n - len(lowS)
    memo := make([][]int, n)
    for i := range memo {
        memo[i] = make([]int, target+1)
        for j := range memo[i] {
            memo[i][j] = -1
        }
    }

    var dfs func(int, int, bool, bool) int
    dfs = func(i, cnt0 int, limitLow, limitHigh bool) (res int) {
        // 不合法
        if cnt0 > target {
            return 0
        }
        if i == n {
            // 不合法
            if cnt0 < target {
                return 0
            }
            // 合法
            return 1
        }
        if !limitLow && !limitHigh {
            p := &memo[i][cnt0]
            if *p >= 0 {
                return *p
            }
            defer func() { *p = res }()
        }

        lo := 0
        if limitLow && i >= diffLH {
            lo = int(lowS[i-diffLH] - '0')
        }
        hi := 9
        if limitHigh {
            hi = int(highS[i] - '0')
        }

        d := lo
        // 通过 limitLow 和 i 可以判断能否不填数字，无需 isNum 参数
        // 如果前导零不影响答案，去掉这个 if block
        if limitLow && i < diffLH {
            // 不填数字，上界不受约束
            res = dfs(i+1, 0, true, false)
            d = 1
        }

        for ; d <= hi; d++ {
            c0 := cnt0
            if d == 0 {
                c0++ // 统计 0 的个数
            }
            res += dfs(i+1, c0, limitLow && d == lo, limitHigh && d == hi)
            // res %= mod
        }
        return
    }

    return dfs(0, 0, true, true)
}`

        }
    },
    {
        title: "数位DP 数位和",
        data: {
"Python":
`# 计算在 [low, high] 中的整数 x 的数位和，满足 x 中的不同数字个数不超过 k
def digitDPContribution(low: int, high: int, k: int) -> int:
    low_s = list(map(int, str(low)))  # 避免在 dfs 中频繁调用 int()
    high_s = list(map(int, str(high)))
    n = len(high_s)
    diff_lh = n - len(low_s)

    # dfs 返回两个数：子树合法数字个数，子树数位总和
    @cache
    def dfs(i: int, mask: int, limit_low: bool, limit_high: bool) -> Tuple[int, int]:
        if i == n:
            # 如果没有特殊约束，那么能递归到终点的都是合法数字
            return 1, 0

        lo = low_s[i - diff_lh] if limit_low and i >= diff_lh else 0
        hi = high_s[i] if limit_high else 9

        cnt = res = 0
        start = lo

        # 如果前导零不影响答案，去掉这个 if block
        if limit_low and i < diff_lh:
            # 不填数字，上界不受约束
            cnt, res = dfs(i + 1, 0, True, False)
            start = 1

        for d in range(start, hi + 1):
            new_mask = mask | 1 << d
            if new_mask.bit_count() > k:  # 不满足要求
                continue
            sub_cnt, sub_sum = dfs(i + 1,
                                   new_mask,
                                   limit_low and d == lo,
                                   limit_high and d == hi)
            cnt += sub_cnt  # 累加子树的合法数字个数
            res += sub_sum  # 累加子树的数位总和
            res += d * sub_cnt  # d 会出现在 sub_cnt 个数中（贡献法）

        # cnt %= MOD; res %= MOD
        return cnt, res

    return dfs(0, 0, True, True)[1]`,

"Java":
`// 计算在 [low, high] 中的整数 x 的数位和，满足 x 中的不同数字个数不超过 k
class Solution {
    public long digitDPContribution(long low, long high, int k) {
        char[] lowS = String.valueOf(low).toCharArray();
        char[] highS = String.valueOf(high).toCharArray();

        int n = highS.length;
        long[][][] memo = new long[n][1 << 10][];

        return dfs(0, 0, true, true, lowS, highS, k, memo)[1];
    }

    // dfs 返回两个数：子树合法数字个数，子树数位总和
    private long[] dfs(int i, int mask, boolean limitLow, boolean limitHigh, char[] lowS, char[] highS, int k, long[][][] memo) {
        if (i == highS.length) {
            // 如果没有特殊约束，那么能递归到终点的都是合法数字
            return new long[]{1, 0};
        }

        if (!limitLow && !limitHigh && memo[i][mask] != null) {
            return memo[i][mask];
        }

        int diff = highS.length - lowS.length;
        int lo = limitLow && i >= diff ? lowS[i - diff] - '0' : 0;
        int hi = limitHigh ? highS[i] - '0' : 9;

        long cnt = 0;
        long sum = 0;
        int d = lo;

        // 如果前导零不影响答案，去掉这个 if block
        if (limitLow && i < diff) {
            // 不填数字，上界不受约束
            long[] sub = dfs(i + 1, 0, true, false, lowS, highS, k, memo);
            cnt = sub[0];
            sum = sub[1];
            d = 1;
        }

        for (; d <= hi; d++) {
            int newMask = mask | 1 << d;
            if (Integer.bitCount(newMask) > k) { // 不满足要求
                continue;
            }
            long[] sub = dfs(i + 1,
                             newMask,
                             limitLow && d == lo,
                             limitHigh && d == hi,
                             lowS, highS, k, memo);
            cnt += sub[0]; // 累加子树的合法数字个数
            sum += sub[1]; // 累加子树的数位总和
            sum += d * sub[0]; // d 会出现在 sub[0] 个数中（贡献法）
            // cnt %= MOD; sum %= MOD;
        }

        long[] res = new long[]{cnt, sum};
        if (!limitLow && !limitHigh) {
            memo[i][mask] = res;
        }
        return res;
    }
}`,

"C++":
`// 计算在 [low, high] 中的整数 x 的数位和，满足 x 中的不同数字个数不超过 k
long long digitDPContribution(long long low, long long high, int k) {
    string low_s = to_string(low);
    string high_s = to_string(high);
    int n = high_s.size();
    int diff_lh = n - low_s.size();
    vector memo(n, vector<pair<long long, long long>>(1 << 10, {-1, -1}));

    // dfs 返回两个数：子树合法数字个数，子树数位总和
    auto dfs = [&](this auto&& dfs, int i, int mask, bool limit_low, bool limit_high) -> pair<long long, long long> {
        if (i == n) {
            // 如果没有特殊约束，那么能递归到终点的都是合法数字
            return {1, 0};
        }

        if (!limit_low && !limit_high && memo[i][mask].first >= 0) {
            return memo[i][mask];
        }

        int lo = limit_low && i >= diff_lh ? low_s[i - diff_lh] - '0' : 0;
        int hi = limit_high ? high_s[i] - '0' : 9;

        long long cnt = 0, sum = 0;
        int d = lo;

        // 如果前导零不影响答案，去掉这个 if block
        if (limit_low && i < diff_lh) {
            // 不填数字，上界不受约束
            tie(cnt, sum) = dfs(i + 1, 0, true, false);
            d = 1;
        }

        for (; d <= hi; d++) {
            int new_mask = mask | 1 << d;
            if (popcount((uint32_t) new_mask) > k) { // 不满足要求
                continue;
            }
            auto [sub_cnt, sub_sum] = dfs(i + 1, new_mask, limit_low && d == lo, limit_high && d == hi);
            cnt += sub_cnt; // 累加子树的合法数字个数
            sum += sub_sum; // 累加子树的数位总和
            sum += d * sub_cnt; // d 会出现在 sub_cnt 个数中（贡献法）
            // cnt %= MOD; sum %= MOD;
        }

        pair<long long, long long> res = {cnt, sum};
        if (!limit_low && !limit_high) {
            memo[i][mask] = res;
        }
        return res;
    };

    return dfs(0, 0, true, true).second;
}`,

"Go":
`// 计算在 [low, high] 中的整数 x 的数位和，满足 x 中的不同数字个数不超过 k
func digitDPContribution(low, high int, k int) int {
    lowS := strconv.Itoa(low)
    highS := strconv.Itoa(high)
    n := len(highS)
    diffLH := n - len(lowS)
    type pair struct{ cnt, sum int }
    memo := make([][1 << 10]pair, n)
    for i := range memo {
        for j := range memo[i] {
            memo[i][j].cnt = -1
        }
    }

    // dfs 返回两个数：子树合法数字个数，子树数位总和
    var dfs func(int, int, bool, bool) pair
    dfs = func(i, mask int, limitLow, limitHigh bool) (res pair) {
        if i == n {
            // 如果没有特殊约束，那么能递归到终点的都是合法数字
            return pair{1, 0}
        }
        if !limitLow && !limitHigh {
            p := &memo[i][mask]
            if p.cnt >= 0 {
                return *p
            }
            defer func() { *p = res }()
        }

        lo := 0
        if limitLow && i >= diffLH {
            lo = int(lowS[i-diffLH] - '0')
        }
        hi := 9
        if limitHigh {
            hi = int(highS[i] - '0')
        }

        d := lo
        // 如果前导零不影响答案，可以去掉这个 if block
        if limitLow && i < diffLH {
            // 不填数字，上界不受约束
            res = dfs(i+1, 0, true, false)
            d = 1
        }

        for ; d <= hi; d++ {
            newMask := mask | 1<<d
            if bits.OnesCount(uint(newMask)) > k { // 不满足要求
                continue
            }
            sub := dfs(i+1, newMask, limitLow && d == lo, limitHigh && d == hi)
            res.cnt += sub.cnt     // 累加子树的合法数字个数
            res.sum += sub.sum     // 累加子树的数位总和
            res.sum += d * sub.cnt // d 会出现在 sub.cnt 个数中（贡献法）
            // res.cnt %= mod; res.sum %= mod
        }
        return
    }

    return dfs(0, 0, true, true).sum
}`
        }
    },
    {
        title: "换根 DP（二次扫描法，简单）",
        data: {
"Python":
`class Solution:
    def maxSubgraphScore(self, n: int, edges: List[List[int]], good: List[int]) -> List[int]:
        g = [[] for _ in range(n)]
        for x, y in edges:
            g[x].append(y)
            g[y].append(x)

        # sub_score[x] 表示（以 0 为根时）包含 x 的子树 x 的最大得分
        sub_score = [0] * n
        # 计算 sub_score[x]
        def dfs(x: int, fa: int) -> None:
            sub_score[x] = 1 if good[x] else -1  # sub_score[x] 一定包含 x
            for y in g[x]:
                if y != fa:
                    dfs(y, x)
                    # 如果子树 y 的最大得分 > 0，选子树 y，否则不选
                    sub_score[x] += max(sub_score[y], 0)
        dfs(0, -1)

        ans = [0] * n
        ans[0] = sub_score[0]
        # 对于 x 的儿子 y，计算包含 y 的子图最大得分
        def reroot(x: int, fa: int) -> None:
            for y in g[x]:
                if y != fa:
                    # 从 ans[x] 中去掉子树 y，剩余部分记作 F
                    score_f = ans[x] - max(sub_score[y], 0)
                    # 换根后，x 挂在 y 的下面，F 变成 y 的一棵子树
                    # 计算 F 对 y 的贡献：如果 F 的最大得分 > 0，选 F，否则不选
                    ans[y] = sub_score[y] + max(score_f, 0)
                    reroot(y, x)
        reroot(0, -1)
        return ans`,

"Java":
`class Solution {
    public int[] maxSubgraphScore(int n, int[][] edges, int[] good) {
        List<Integer>[] g = new ArrayList[n];
        Arrays.setAll(g, _ -> new ArrayList<>());
        for (int[] e : edges) {
            int x = e[0];
            int y = e[1];
            g[x].add(y);
            g[y].add(x);
        }

        // subScore[x] 表示（以 0 为根时）包含 x 的子树 x 的最大得分
        int[] subScore = new int[n];
        dfs(0, -1, g, good, subScore);

        int[] ans = new int[n];
        ans[0] = subScore[0];
        reroot(0, -1, g, subScore, ans);
        return ans;
    }

    // 计算 subScore[x]
    private void dfs(int x, int fa, List<Integer>[] g, int[] good, int[] subScore) {
        subScore[x] = good[x] == 0 ? -1 : 1; // subScore[x] 一定包含 x
        for (int y : g[x]) {
            if (y != fa) {
                dfs(y, x, g, good, subScore);
                // 如果子树 y 的最大得分 > 0，选子树 y，否则不选
                subScore[x] += Math.max(subScore[y], 0);
            }
        }
    }

    // 对于 x 的儿子 y，计算包含 y 的子图最大得分
    private void reroot(int x, int fa, List<Integer>[] g, int[] subScore, int[] ans) {
        for (int y : g[x]) {
            if (y != fa) {
                // 从 ans[x] 中去掉子树 y，剩余部分记作 F
                int scoreF = ans[x] - Math.max(subScore[y], 0);
                // 换根后，x 挂在 y 的下面，F 变成 y 的一棵子树
                // 计算 F 对 y 的贡献：如果 F 的最大得分 > 0，选 F，否则不选
                ans[y] = subScore[y] + Math.max(scoreF, 0);
                reroot(y, x, g, subScore, ans);
            }
        }
    }
}`,

"C++":
`class Solution {
public:
    vector<int> maxSubgraphScore(int n, vector<vector<int>>& edges, vector<int>& good) {
        vector<vector<int>> g(n);
        for (auto& e : edges) {
            int x = e[0], y = e[1];
            g[x].push_back(y);
            g[y].push_back(x);
        }

        // sub_score[x] 表示（以 0 为根时）包含 x 的子树 x 的最大得分
        vector<int> sub_score(n);
        // 计算 sub_score[x]
        auto dfs = [&](this auto&& dfs, int x, int fa) -> void {
            sub_score[x] = good[x] ? 1 : -1; // subScore[x] 一定包含 x
            for (int y : g[x]) {
                if (y != fa) {
                    dfs(y, x);
                    // 如果子树 y 的最大得分 > 0，选子树 y，否则不选
                    sub_score[x] += max(sub_score[y], 0);
                }
            }
        };
        dfs(0, -1);

        vector<int> ans(n);
        ans[0] = sub_score[0];
        // 对于 x 的儿子 y，计算包含 y 的子图最大得分
        auto reroot = [&](this auto&& reroot, int x, int fa) -> void {
            for (int y : g[x]) {
                if (y != fa) {
                    // 从 ans[x] 中去掉子树 y，剩余部分记作 F
                    int score_f = ans[x] - max(sub_score[y], 0);
                    // 换根后，x 挂在 y 的下面，F 变成 y 的一棵子树
                    // 计算 F 对 y 的贡献：如果 F 的最大得分 > 0，选 F，否则不选
                    ans[y] = sub_score[y] + max(score_f, 0);
                    reroot(y, x);
                }
            }
        };
        reroot(0, -1);
        return ans;
    }
};`,

"Go":
`func maxSubgraphScore(n int, edges [][]int, good []int) []int {
    g := make([][]int, n)
    for _, e := range edges {
        x, y := e[0], e[1]
        g[x] = append(g[x], y)
        g[y] = append(g[y], x)
    }

    // subScore[x] 表示（以 0 为根时）包含 x 的子树 x 的最大得分
    subScore := make([]int, n)
    // 计算 subScore[x]
    var dfs func(int, int)
    dfs = func(x, fa int) {
        subScore[x] = good[x]*2 - 1 // subScore[x] 一定包含 x
        for _, y := range g[x] {
            if y != fa {
                dfs(y, x)
                // 如果子树 y 的最大得分 > 0，选子树 y，否则不选
                subScore[x] += max(subScore[y], 0)
            }
        }
    }
    dfs(0, -1)

    ans := make([]int, n)
    ans[0] = subScore[0]
    // 对于 x 的儿子 y，计算包含 y 的子图最大得分
    var reroot func(int, int)
    reroot = func(x, fa int) {
        for _, y := range g[x] {
            if y != fa {
                // 从 ans[x] 中去掉子树 y，剩余部分记作 F
                scoreF := ans[x] - max(subScore[y], 0)
                // 换根后，x 挂在 y 的下面，F 变成 y 的一棵子树
                // 计算 F 对 y 的贡献：如果 F 的最大得分 > 0，选 F，否则不选
                ans[y] = subScore[y] + max(scoreF, 0)
                reroot(y, x)
            }
        }
    }
    reroot(0, -1)
    return ans
}`
        }
    },
    {
        title: "换根 DP（二次扫描法，维护最大次大）",
        data: {
"Python":
`class Solution:
    def timeTaken(self, edges: List[List[int]]) -> List[int]:
        n = len(edges) + 1
        g = [[] for _ in range(n)]
        for x, y in edges:
            g[x].append(y)
            g[y].append(x)

        # sub_res[x] 保存子树 x 的最大深度，次大深度，以及最大深度要往哪个儿子走
        sub_res = [None] * n
        # 计算 sub_res[x]
        def dfs(x: int, fa: int) -> None:
            max_d = max_d2 = my = 0
            for y in g[x]:
                if y == fa:
                    continue
                dfs(y, x)
                w = 2 - y % 2  # 从 x 到 y 的边权
                max_y = sub_res[y][0] + w  # 从 x 出发，往 y 方向的最大深度
                if max_y > max_d:
                    max_d2 = max_d
                    max_d = max_y
                    my = y
                elif max_y > max_d2:
                    max_d2 = max_y
            sub_res[x] = (max_d, max_d2, my)
        dfs(0, -1)

        # ans[x] 表示当 x 是树根时，整棵树的最大深度
        ans = [0] * n
        # 计算 ans[x]
        def reroot(x: int, fa: int, from_up: int) -> None:
            max_d, max_d2, my = sub_res[x]
            ans[x] = max(max_d, from_up)
            for y in g[x]:
                if y == fa:
                    continue
                w = 2 - x % 2  # 从 y 到 x 的边权
                mx = max_d if y != my else max_d2
                # 站在 x 的角度，不往 y 走，能走多远？
                # 要么往上走（from_up），要么往除了 y 的其余子树走（mx），二者取最大值
                reroot(y, x, max(from_up, mx) + w)  # 对于 y 来说，加上从 y 到 x 的边权 w
        reroot(0, -1, 0)
        return ans`,

"Java":
`class Solution {
    public int[] timeTaken(int[][] edges) {
        int n = edges.length + 1;
        List<Integer>[] g = new ArrayList[n];
        Arrays.setAll(g, _ -> new ArrayList<>());
        for (int[] e : edges) {
            int x = e[0];
            int y = e[1];
            g[x].add(y);
            g[y].add(x);
        }

        // subRes[x] 保存子树 x 的最大深度，次大深度，以及最大深度要往哪个儿子走
        int[][] subRes = new int[n][];
        dfs(0, -1, g, subRes);

        // ans[x] 表示当 x 是树根时，整棵树的最大深度
        int[] ans = new int[n];
        reroot(0, -1, 0, g, subRes, ans);
        return ans;
    }

    // 计算 subRes[x]
    private void dfs(int x, int fa, List<Integer>[] g, int[][] subRes) {
        int maxD = 0;
        int maxD2 = 0;
        int my = 0;
        for (int y : g[x]) {
            if (y == fa) {
                continue;
            }
            dfs(y, x, g, subRes);
            int w = 2 - y % 2; // 从 x 到 y 的边权
            int maxY = subRes[y][0] + w; // 从 x 出发，往 y 方向的最大深度
            if (maxY > maxD) {
                maxD2 = maxD;
                maxD = maxY;
                my = y;
            } else if (maxY > maxD2) {
                maxD2 = maxY;
            }
        }
        subRes[x] = new int[]{maxD, maxD2, my};
    }

    // 计算 ans[x]
    private void reroot(int x, int fa, int fromUp, List<Integer>[] g, int[][] subRes, int[] ans) {
        int maxD = subRes[x][0];
        int maxD2 = subRes[x][1];
        int my = subRes[x][2];
        ans[x] = Math.max(maxD, fromUp);
        for (int y : g[x]) {
            if (y == fa) {
                continue;
            }
            int w = 2 - x % 2; // 从 y 到 x 的边权
            int mx = y != my ? maxD : maxD2;
            // 站在 x 的角度，不往 y 走，能走多远？
            // 要么往上走（fromUp），要么往除了 y 的其余子树走（mx），二者取最大值
            reroot(y, x, Math.max(fromUp, mx) + w, g, subRes, ans);
        }
    }
}`,

"C++":
`class Solution {
public:
    vector<int> timeTaken(vector<vector<int>>& edges) {
        int n = edges.size() + 1;
        vector<vector<int>> g(n);
        for (auto& e : edges) {
            int x = e[0], y = e[1];
            g[x].push_back(y);
            g[y].push_back(x);
        }

        // sub_res[x] 保存子树 x 的最大深度，次大深度，以及最大深度要往哪个儿子走
        vector<tuple<int, int, int>> sub_res(n);
        // 计算 sub_res[x]
        auto dfs = [&](this auto&& dfs, int x, int fa) -> void {
            int max_d = 0, max_d2 = 0, my = 0;
            for (int y : g[x]) {
                if (y == fa) {
                    continue;
                }
                dfs(y, x);
                int w = 2 - y % 2; // 从 x 到 y 的边权
                int max_y = get<0>(sub_res[y]) + w; // 从 x 出发，往 y 方向的最大深度
                if (max_y > max_d) {
                    max_d2 = max_d;
                    max_d = max_y;
                    my = y;
                } else if (max_y > max_d2) {
                    max_d2 = max_y;
                }
            }
            sub_res[x] = {max_d, max_d2, my};
        };
        dfs(0, -1);

        // ans[x] 表示当 x 是树根时，整棵树的最大深度
        vector<int> ans(n);
        // 计算 ans[x]
        auto reroot = [&](this auto&& reroot, int x, int fa, int from_up) -> void {
            auto [max_d, max_d2, my] = sub_res[x];
            ans[x] = max(max_d, from_up);
            for (int y : g[x]) {
                if (y == fa) {
                    continue;
                }
                int w = 2 - x % 2; // 从 y 到 x 的边权
                int mx = y != my ? max_d : max_d2;
                // 站在 x 的角度，不往 y 走，能走多远？
                // 要么往上走（from_up），要么往除了 y 的其余子树走（mx），二者取最大值
                reroot(y, x, max(from_up, mx) + w); // 对于 y 来说，加上从 y 到 x 的边权 w
            }
        };
        reroot(0, -1, 0);
        return ans;
    }
};`,

"Go":
`func timeTaken(edges [][]int) []int {
    n := len(edges) + 1
    g := make([][]int, n)
    for _, e := range edges {
        x, y := e[0], e[1]
        g[x] = append(g[x], y)
        g[y] = append(g[y], x)
    }

    // subRes[x] 保存子树 x 的最大深度 maxD，次大深度 maxD2，以及最大深度要往儿子 y 走
    subRes := make([]struct{ maxD, maxD2, y int }, n)
    // 计算 subRes[x]
    var dfs func(int, int)
    dfs = func(x, fa int) {
        res := &subRes[x]
        for _, y := range g[x] {
            if y == fa {
                continue
            }
            dfs(y, x)
            w := 2 - y%2 // 从 x 到 y 的边权
            maxD := subRes[y].maxD + w // 从 x 出发，往 y 方向的最大深度
            if maxD > res.maxD {
                res.maxD2 = res.maxD
                res.maxD = maxD
                res.y = y
            } else if maxD > res.maxD2 {
                res.maxD2 = maxD
            }
        }
    }
    dfs(0, -1)

    // ans[x] 表示当 x 是树根时，整棵树的最大深度
    ans := make([]int, n)
    // 计算 ans[x]
    var reroot func(int, int, int)
    reroot = func(x, fa, fromUp int) {
        sub := subRes[x]
        ans[x] = max(sub.maxD, fromUp)
        for _, y := range g[x] {
            if y == fa {
                continue
            }
            w := 2 - x%2 // 从 y 到 x 的边权
            mx := sub.maxD
            if y == sub.y { // 对于 y 来说，上面要选次大的
                mx = sub.maxD2
            }
            // 站在 x 的角度，不往 y 走，能走多远？
            // 要么往上走（fromUp），要么往除了 y 的其余子树走（mx），二者取最大值
            reroot(y, x, max(fromUp, mx)+w) // 对于 y 来说，加上从 y 到 x 的边权 w
        }
    }
    reroot(0, -1, 0)
    return ans
}`
        }
    },
    {
        title: "单调队列",
        data: {
"Python":
`# 计算 nums 的每个长为 k 的窗口的最大值
# 时间复杂度 O(n)，其中 n 是 nums 的长度
def maxSlidingWindow(nums: List[int], k: int) -> List[int]:
    ans = [0] * (len(nums) - k + 1)  # 窗口个数
    q = deque()  # 双端队列

    for i, x in enumerate(nums):
        # 1. 右边入
        while q and nums[q[-1]] <= x:
            q.pop()  # 维护 q 的单调性
        q.append(i)  # 注意保存的是下标，这样下面可以判断队首是否离开窗口

        # 2. 左边出
        left = i - k + 1  # 窗口左端点
        if q[0] < left:  # 队首离开窗口
            q.popleft()

        # 3. 在窗口左端点处记录答案
        if left >= 0:
            # 由于队首到队尾单调递减，所以窗口最大值就在队首
            ans[left] = nums[q[0]]

    return ans`,

"Java":
`class Solution {
    // 计算 nums 的每个长为 k 的窗口的最大值
    // 时间复杂度 O(n)，其中 n 是 nums 的长度
    private int[] maxSlidingWindow(int[] nums, int k) {
        int n = nums.length;
        int[] ans = new int[n - k + 1]; // 窗口个数
        Deque<Integer> q = new ArrayDeque<>();

        for (int i = 0; i < n; i++) {
            // 1. 右边入
            while (!q.isEmpty() && nums[q.getLast()] <= nums[i]) {
                q.removeLast(); // 维护 q 的单调性
            }
            q.addLast(i); // 注意保存的是下标，这样下面可以判断队首是否离开窗口

            // 2. 左边出
            int left = i - k + 1; // 窗口左端点
            if (q.getFirst() < left) { // 队首离开窗口
                q.removeFirst();
            }

            // 3. 在窗口左端点处记录答案
            if (left >= 0) {
                // 由于队首到队尾单调递减，所以窗口最大值就在队首
                ans[left] = nums[q.getFirst()];
            }
        }

        return ans;
    }
}`,

"C++":
`// 计算 nums 的每个长为 k 的窗口的最大值
// 时间复杂度 O(n)，其中 n 是 nums 的长度
vector<int> maxSlidingWindow(const vector<int>& nums, int k) {
    int n = nums.size();
    vector<int> ans(n - k + 1); // 窗口个数
    deque<int> q; // 双端队列

    for (int i = 0; i < n; i++) {
        // 1. 右边入
        while (!q.empty() && nums[q.back()] <= nums[i]) {
            q.pop_back(); // 维护 q 的单调性
        }
        q.push_back(i); // 注意保存的是下标，这样下面可以判断队首是否离开窗口

        // 2. 左边出
        int left = i - k + 1; // 窗口左端点
        if (q.front() < left) { // 队首离开窗口
            q.pop_front();
        }

        // 3. 在窗口左端点处记录答案
        if (left >= 0) {
            // 由于队首到队尾单调递减，所以窗口最大值就在队首
            ans[left] = nums[q.front()];
        }
    }

    return ans;
}`,

"Go":
`// 计算 nums 的每个长为 k 的窗口的最大值
// 时间复杂度 O(n)，其中 n 是 nums 的长度
func maxSlidingWindow(nums []int, k int) []int {
    ans := make([]int, len(nums)-k+1) // 窗口个数
    q := []int{}

    for i, x := range nums {
        // 1. 右边入
        for len(q) > 0 && nums[q[len(q)-1]] <= x {
            q = q[:len(q)-1] // 维护 q 的单调性
        }
        q = append(q, i) // 注意保存的是下标，这样下面可以判断队首是否离开窗口

        // 2. 左边出
        left := i - k + 1 // 窗口左端点
        if q[0] < left {  // 队首离开窗口
            q = q[1:] // Go 的切片是 O(1) 的
        }

        // 3. 在窗口左端点处记录答案
        if left >= 0 {
            // 由于队首到队尾单调递减，所以窗口最大值就在队首
            ans[left] = nums[q[0]]
        }
    }

    return ans
}`
        }
    },
    {
        title: "懒删除堆",
        data: {
"Python":
`class LazyHeap:
    def __init__(self):
        self.heap = []  # 最小堆（最大堆可以把数字取反或重载 __lt__）
        self.remove_cnt = defaultdict(int)  # 每个元素剩余需要删除的次数
        self.size = 0  # 堆的实际大小

    # 删除
    def remove(self, x: Any) -> None:
        self.remove_cnt[x] += 1  # 懒删除
        self.size -= 1

    # 正式执行删除操作
    def _apply_remove(self) -> None:
        while self.heap and self.remove_cnt[self.heap[0]] > 0:
            self.remove_cnt[self.heap[0]] -= 1
            heappop(self.heap)

    # 查看堆顶
    def top(self) -> Any:
        self._apply_remove()
        return self.heap[0]  # 真正的堆顶

    # 出堆
    def pop(self) -> Any:
        self._apply_remove()
        self.size -= 1
        return heappop(self.heap)

    # 入堆
    def push(self, x: Any) -> None:
        if self.remove_cnt[x] > 0:
            self.remove_cnt[x] -= 1  # 抵消之前的删除
        else:
            heappush(self.heap, x)
        self.size += 1
`,

"Java":
`// 最小堆 LazyHeap minPQ = new LazyHeap(Integer::compare);
// 最大堆 LazyHeap maxPQ = new LazyHeap((a, b) -> Integer.compare(b, a));
class LazyHeap extends PriorityQueue<Integer> {
    private final Map<Integer, Integer> removeCnt = new HashMap<>(); // 每个元素剩余需要删除的次数
    private int size = 0; // 堆的实际大小

    public LazyHeap(Comparator<Integer> comparator) {
        super(comparator);
    }

    // 删除堆中所有应该删除的元素后，堆的实际大小
    public int size() {
        return size;
    }

    // 删除
    public void remove(int x) {
        removeCnt.merge(x, 1, Integer::sum); // 懒删除
        size--;
    }

    // 正式执行删除操作
    private void applyRemove() {
        while (removeCnt.getOrDefault(peek(), 0) > 0) {
            removeCnt.merge(poll(), -1, Integer::sum);
        }
    }

    // 查看堆顶
    public int top() {
        applyRemove();
        return peek(); // 真正的堆顶
    }

    // 出堆
    public int pop() {
        applyRemove();
        size--;
        return poll();
    }

    // 入堆
    public void push(int x) {
        int c = removeCnt.getOrDefault(x, 0);
        if (c > 0) {
            removeCnt.put(x, c - 1); // 抵消之前的删除
        } else {
            offer(x);
        }
        size++;
    }
}`,

"C++":
`// 最大堆 LazyHeap<int> max_pq;
// 最小堆 LazyHeap<int, greater<int>> min_pq;
template<typename T, typename Compare = less<T>>
class LazyHeap {
    priority_queue<T, vector<T>, Compare> pq;
    unordered_map<T, int> remove_cnt; // 每个元素剩余需要删除的次数
    size_t sz = 0; // 堆的实际大小

    // 正式执行删除操作
    void apply_remove() {
        while (!pq.empty() && remove_cnt[pq.top()] > 0) {
            remove_cnt[pq.top()]--;
            pq.pop();
        }
    }

public:
    // 删除堆中所有应该删除的元素后，堆的实际大小
    size_t size() {
        return sz;
    }

    // 删除
    void remove(T x) {
        remove_cnt[x]++; // 懒删除
        sz--;
    }

    // 查看堆顶
    T top() {
        apply_remove();
        return pq.top(); // 真正的堆顶
    }

    // 出堆
    T pop() {
        apply_remove();
        sz--;
        T x = pq.top();
        pq.pop();
        return x;
    }

    // 入堆
    void push(T x) {
        if (remove_cnt[x] > 0) {
            remove_cnt[x]--; // 抵消之前的删除
        } else {
            pq.push(x);
        }
        sz++;
    }
};`,

"Go":
`func newLazyHeap() *lazyHeap {
	return &lazyHeap{removeCnt: map[int]int{}}
}

// 懒删除堆（默认是最小堆）
type lazyHeap struct {
	sort.IntSlice
	removeCnt map[int]int // 每个元素剩余需要删除的次数
	size      int         // 堆的实际大小
}

// 必须实现的两个接口
func (h *lazyHeap) Push(v any) { h.IntSlice = append(h.IntSlice, v.(int)) }
func (h *lazyHeap) Pop() any   { a := h.IntSlice; v := a[len(a)-1]; h.IntSlice = a[:len(a)-1]; return v }

// 加上这行变成最大堆
// func (h *lazyHeap) Less(i, j int) bool { return h.IntSlice[i] > h.IntSlice[j] }

// 删除
func (h *lazyHeap) remove(v int) {
	h.removeCnt[v]++ // 懒删除
	h.size--
}

// 正式执行删除操作
func (h *lazyHeap) applyRemove() {
	for h.removeCnt[h.IntSlice[0]] > 0 {
		h.removeCnt[h.IntSlice[0]]--
		heap.Pop(h)
	}
}

// 查看堆顶
func (h *lazyHeap) top() int {
	h.applyRemove()
	return h.IntSlice[0] // 真正的堆顶
}

// 出堆
func (h *lazyHeap) pop() int {
	h.applyRemove()
	h.size--
	return heap.Pop(h).(int)
}

// 入堆
func (h *lazyHeap) push(v int) {
	if h.removeCnt[v] > 0 {
		h.removeCnt[v]-- // 抵消之前的删除
	} else {
		heap.Push(h, v)
	}
	h.size++
}`
        }
    },
    {
        title: "并查集",
        data: {
"Python":
`class UnionFind:
    def __init__(self, n: int):
        # 一开始有 n 个集合 {0}, {1}, ..., {n-1}
        # 集合 i 的代表元是自己，大小为 1
        self._fa = list(range(n))  # 代表元
        self._size = [1] * n  # 集合大小
        self.cc = n  # 连通块个数

    # 返回 x 所在集合的代表元
    # 同时做路径压缩，也就是把 x 所在集合中的所有元素的 fa 都改成代表元
    def find(self, x: int) -> int:
        fa = self._fa
        # 如果 fa[x] == x，则表示 x 是代表元
        if fa[x] != x:
            fa[x] = self.find(fa[x])  # fa 改成代表元
        return fa[x]

    # 判断 x 和 y 是否在同一个集合
    def is_same(self, x: int, y: int) -> bool:
        # 如果 x 的代表元和 y 的代表元相同，那么 x 和 y 就在同一个集合
        # 这就是代表元的作用：用来快速判断两个元素是否在同一个集合
        return self.find(x) == self.find(y)

    # 把 from 所在集合合并到 to 所在集合中
    # 返回是否合并成功
    def merge(self, from_: int, to: int) -> bool:
        x, y = self.find(from_), self.find(to)
        if x == y:  # from 和 to 在同一个集合，不做合并
            return False
        self._fa[x] = y  # 合并集合。修改后就可以认为 from 和 to 在同一个集合了
        self._size[y] += self._size[x]  # 更新集合大小（注意集合大小保存在代表元上）
        # 无需更新 _size[x]，因为我们不用 _size[x] 而是用 _size[find(x)] 获取集合大小，但 find(x) == y，我们不会再访问 _size[x]
        self.cc -= 1  # 成功合并，连通块个数减一
        return True

    # 返回 x 所在集合的大小
    def get_size(self, x: int) -> int:
        return self._size[self.find(x)]  # 集合大小保存在代表元上
`,

"Java":
`class UnionFind {
    private final int[] fa; // 代表元
    private final int[] size; // 集合大小
    public int cc; // 连通块个数

    UnionFind(int n) {
        // 一开始有 n 个集合 {0}, {1}, ..., {n-1}
        // 集合 i 的代表元是自己，大小为 1
        fa = new int[n];
        for (int i = 0; i < n; i++) {
            fa[i] = i;
        }
        size = new int[n];
        Arrays.fill(size, 1);
        cc = n;
    }

    // 返回 x 所在集合的代表元
    // 同时做路径压缩，也就是把 x 所在集合中的所有元素的 fa 都改成代表元
    public int find(int x) {
        // 如果 fa[x] == x，则表示 x 是代表元
        if (fa[x] != x) {
            fa[x] = find(fa[x]); // fa 改成代表元
        }
        return fa[x];
    }

    // 判断 x 和 y 是否在同一个集合
    public boolean isSame(int x, int y) {
        // 如果 x 的代表元和 y 的代表元相同，那么 x 和 y 就在同一个集合
        // 这就是代表元的作用：用来快速判断两个元素是否在同一个集合
        return find(x) == find(y);
    }

    // 把 from 所在集合合并到 to 所在集合中
    // 返回是否合并成功
    public boolean merge(int from, int to) {
        int x = find(from);
        int y = find(to);
        if (x == y) { // from 和 to 在同一个集合，不做合并
            return false;
        }
        fa[x] = y; // 合并集合。修改后就可以认为 from 和 to 在同一个集合了
        size[y] += size[x]; // 更新集合大小（注意集合大小保存在代表元上）
        // 无需更新 size[x]，因为我们不用 size[x] 而是用 size[find(x)] 获取集合大小，但 find(x) == y，我们不会再访问 size[x]
        cc--; // 成功合并，连通块个数减一
        return true;
    }

    // 返回 x 所在集合的大小
    public int getSize(int x) {
        return size[find(x)]; // 集合大小保存在代表元上
    }
}`,

"C++":
`class UnionFind {
    vector<int> fa; // 代表元
    vector<int> sz; // 集合大小

public:
    int cc; // 连通块个数

    UnionFind(int n) : fa(n), sz(n, 1), cc(n) {
        // 一开始有 n 个集合 {0}, {1}, ..., {n-1}
        // 集合 i 的代表元是自己，大小为 1
        ranges::iota(fa, 0); // iota(fa.begin(), fa.end(), 0);
    }

    // 返回 x 所在集合的代表元
    // 同时做路径压缩，也就是把 x 所在集合中的所有元素的 fa 都改成代表元
    int find(int x) {
        // 如果 fa[x] == x，则表示 x 是代表元
        if (fa[x] != x) {
            fa[x] = find(fa[x]); // fa 改成代表元
        }
        return fa[x];
    }

    // 判断 x 和 y 是否在同一个集合
    bool is_same(int x, int y) {
        // 如果 x 的代表元和 y 的代表元相同，那么 x 和 y 就在同一个集合
        // 这就是代表元的作用：用来快速判断两个元素是否在同一个集合
        return find(x) == find(y);
    }

    // 把 from 所在集合合并到 to 所在集合中
    // 返回是否合并成功
    bool merge(int from, int to) {
        int x = find(from), y = find(to);
        if (x == y) { // from 和 to 在同一个集合，不做合并
            return false;
        }
        fa[x] = y; // 合并集合。修改后就可以认为 from 和 to 在同一个集合了
        sz[y] += sz[x]; // 更新集合大小（注意集合大小保存在代表元上）
        // 无需更新 sz[x]，因为我们不用 sz[x] 而是用 sz[find(x)] 获取集合大小，但 find(x) == y，我们不会再访问 sz[x]
        cc--; // 成功合并，连通块个数减一
        return true;
    }

    // 返回 x 所在集合的大小
    int get_size(int x) {
        return sz[find(x)]; // 集合大小保存在代表元上
    }
};`,

"Go":
`type unionFind struct {
    fa []int // 代表元
    sz []int // 集合大小
    cc int   // 连通块个数
}

func newUnionFind(n int) unionFind {
    fa := make([]int, n)
    sz := make([]int, n)
    // 一开始有 n 个集合 {0}, {1}, ..., {n-1}
    // 集合 i 的代表元是自己，大小为 1
    for i := range fa {
        fa[i] = i
        sz[i] = 1
    }
    return unionFind{fa, sz, n}
}

// 返回 x 所在集合的代表元
// 同时做路径压缩，也就是把 x 所在集合中的所有元素的 fa 都改成代表元
func (u unionFind) find(x int) int {
    // 如果 fa[x] == x，则表示 x 是代表元
    if u.fa[x] != x {
        u.fa[x] = u.find(u.fa[x]) // fa 改成代表元
    }
    return u.fa[x]
}

// 判断 x 和 y 是否在同一个集合
func (u unionFind) same(x, y int) bool {
    // 如果 x 的代表元和 y 的代表元相同，那么 x 和 y 就在同一个集合
    // 这就是代表元的作用：用来快速判断两个元素是否在同一个集合
    return u.find(x) == u.find(y)
}

// 把 from 所在集合合并到 to 所在集合中
// 返回是否合并成功
func (u *unionFind) merge(from, to int) bool {
    x, y := u.find(from), u.find(to)
    if x == y { // from 和 to 在同一个集合，不做合并
        return false
    }
    u.fa[x] = y // 合并集合。修改后就可以认为 from 和 to 在同一个集合了
    u.sz[y] += u.sz[x] // 更新集合大小（注意集合大小保存在代表元上）
    // 无需更新 sz[x]，因为我们不用 sz[x] 而是用 sz[find(x)] 获取集合大小，但 find(x) == y，我们不会再访问 sz[x]
    u.cc-- // 成功合并，连通块个数减一
    return true
}

// 返回 x 所在集合的大小
func (u unionFind) size(x int) int {
    return u.sz[u.find(x)] // 集合大小保存在代表元上
}`
        }
    },
    {
        title: "带权并查集",
        data: {
"Python":
`class UnionFind:
    def __init__(self, n: int):
        # 一开始有 n 个集合 {0}, {1}, ..., {n-1}
        # 集合 i 的代表元是自己，自己到自己的距离是 0
        self.fa = list(range(n))  # 代表元
        self.dis = [0] * n  # dis[x] 表示 x 到（x 所在集合的）代表元的距离

    # 返回 x 所在集合的代表元
    # 同时做路径压缩
    def find(self, x: int) -> int:
        fa = self.fa
        if fa[x] != x:
            root = self.find(fa[x])
            self.dis[x] += self.dis[fa[x]]  # 递归更新 x 到其代表元的距离
            fa[x] = root
        return fa[x]

    # 判断 x 和 y 是否在同一个集合（同普通并查集）
    def same(self, x: int, y: int) -> bool:
        return self.find(x) == self.find(y)

    # 计算从 from 到 to 的相对距离
    # 调用时需保证 from 和 to 在同一个集合中，否则返回值无意义
    def get_relative_distance(self, from_: int, to: int) -> int:
        self.find(from_)
        self.find(to)
        # to-from = (x-from) - (x-to) = dis[from] - dis[to]
        return self.dis[from_] - self.dis[to]

    # 合并 from 和 to，新增信息 to - from = value
    # 其中 to 和 from 表示未知量，下文的 x 和 y 也表示未知量
    # 如果 from 和 to 不在同一个集合，返回 True，否则返回是否与已知信息矛盾
    def merge(self, from_: int, to: int, value: int) -> bool:
        x, y = self.find(from_), self.find(to)
        dis = self.dis
        if x == y:  # from 和 to 在同一个集合，不做合并
            # to-from = (x-from) - (x-to) = dis[from] - dis[to] = value
            return dis[from_] - dis[to] == value
        #    x --------- y
        #   /           /
        # from ------- to
        # 已知 x-from = dis[from] 和 y-to = dis[to]，现在合并 from 和 to，新增信息 to-from = value
        # 由于 y-from = (y-x) + (x-from) = (y-to) + (to-from)
        # 所以 y-x = (to-from) + (y-to) - (x-from) = value + dis[to] - dis[from]
        dis[x] = value + dis[to] - dis[from_]  # 计算 x 到其代表元 y 的距离
        self.fa[x] = y
        return True
`,

"Java":
`class UnionFind {
    private final int[] fa; // 代表元
    private final int[] dis; // dis[x] 表示 x 到（x 所在集合的）代表元的距离
    // 注意数据范围，必要时使用 long[] dis

    public UnionFind(int n) {
        // 一开始有 n 个集合 {0}, {1}, ..., {n-1}
        // 集合 i 的代表元是自己，自己到自己的距离是 0
        fa = new int[n];
        dis = new int[n];
        for (int i = 0; i < n; i++) {
            fa[i] = i;
        }
    }

    // 返回 x 所在集合的代表元
    // 同时做路径压缩
    public int find(int x) {
        if (fa[x] != x) {
            int root = find(fa[x]);
            dis[x] += dis[fa[x]]; // 递归更新 x 到其代表元的距离
            fa[x] = root;
        }
        return fa[x];
    }

    // 判断 x 和 y 是否在同一个集合（同普通并查集）
    public boolean same(int x, int y) {
        return find(x) == find(y);
    }

    // 计算从 from 到 to 的相对距离
    // 调用时需保证 from 和 to 在同一个集合中，否则返回值无意义
    public int getRelativeDistance(int from, int to) {
        find(from);
        find(to);
        // to-from = (x-from) - (x-to) = dis[from] - dis[to]
        return dis[from] - dis[to];
    }

    // 合并 from 和 to，新增信息 to - from = value
    // 其中 to 和 from 表示未知量，下文的 x 和 y 也表示未知量
    // 如果 from 和 to 不在同一个集合，返回 true，否则返回是否与已知信息矛盾
    public boolean merge(int from, int to, int value) {
        int x = find(from), y = find(to);
        if (x == y) { // from 和 to 在同一个集合，不做合并
            // to-from = (x-from) - (x-to) = dis[from] - dis[to] = value
            return dis[from] - dis[to] == value;
        }
        //    x --------- y
        //   /           /
        // from ------- to
        // 已知 x-from = dis[from] 和 y-to = dis[to]，现在合并 from 和 to，新增信息 to-from = value
        // 由于 y-from = (y-x) + (x-from) = (y-to) + (to-from)
        // 所以 y-x = (to-from) + (y-to) - (x-from) = value + dis[to] - dis[from]
        dis[x] = value + dis[to] - dis[from]; // 计算 x 到其代表元 y 的距离
        fa[x] = y;
        return true;
    }
}`,

"C++":
`// 根据题目用 UnionFind<int> uf(n) 或者 UnionFind<long long> uf(n) 初始化
template<typename T>
class UnionFind {
public:
    vector<int> fa; // 代表元
    vector<T> dis; // dis[x] 表示 x 到（x 所在集合的）代表元的距离

    UnionFind(int n) : fa(n), dis(n) {
        // 一开始有 n 个集合 {0}, {1}, ..., {n-1}
        // 集合 i 的代表元是自己，自己到自己的距离是 0
        ranges::iota(fa, 0); // iota(fa.begin(), fa.end(), 0);
    }

    // 返回 x 所在集合的代表元
    // 同时做路径压缩
    int find(int x) {
        if (fa[x] != x) {
            int root = find(fa[x]);
            dis[x] += dis[fa[x]]; // 递归更新 x 到其代表元的距离
            fa[x] = root;
        }
        return fa[x];
    }

    // 判断 x 和 y 是否在同一个集合（同普通并查集）
    bool same(int x, int y) {
        return find(x) == find(y);
    }

    // 计算从 from 到 to 的相对距离
    // 调用时需保证 from 和 to 在同一个集合中，否则返回值无意义
    T get_relative_distance(int from, int to) {
        find(from);
        find(to);
        // to-from = (x-from) - (x-to) = dis[from] - dis[to]
        return dis[from] - dis[to];
    }

    // 合并 from 和 to，新增信息 to - from = value
    // 其中 to 和 from 表示未知量，下文的 x 和 y 也表示未知量
    // 如果 from 和 to 不在同一个集合，返回 true，否则返回是否与已知信息矛盾
    bool merge(int from, int to, T value) {
        int x = find(from), y = find(to);
        if (x == y) { // from 和 to 在同一个集合，不做合并
            // to-from = (x-from) - (x-to) = dis[from] - dis[to] = value
            return dis[from] - dis[to] == value;
        }
        //    x --------- y
        //   /           /
        // from ------- to
        // 已知 x-from = dis[from] 和 y-to = dis[to]，现在合并 from 和 to，新增信息 to-from = value
        // 由于 y-from = (y-x) + (x-from) = (y-to) + (to-from)
        // 所以 y-x = (to-from) + (y-to) - (x-from) = value + dis[to] - dis[from]
        dis[x] = value + dis[to] - dis[from]; // 计算 x 到其代表元 y 的距离
        fa[x] = y;
        return true;
    }
};`,

"Go":
`type unionFind struct {
    fa  []int // 代表元
    dis []int // dis[x] 表示 x 到（x 所在集合的）代表元的距离
}

func newUnionFind(n int) unionFind {
    // 一开始有 n 个集合 {0}, {1}, ..., {n-1}
    // 集合 i 的代表元是自己，自己到自己的距离是 0
    fa := make([]int, n)
    dis := make([]int, n)
    for i := range fa {
        fa[i] = i
    }
    return unionFind{fa, dis}
}

// 返回 x 所在集合的代表元
// 同时做路径压缩
func (u unionFind) find(x int) int {
    if u.fa[x] != x {
        root := u.find(u.fa[x])
        u.dis[x] += u.dis[u.fa[x]] // 递归更新 x 到其代表元的距离
        u.fa[x] = root
    }
    return u.fa[x]
}

// 判断 x 和 y 是否在同一个集合（同普通并查集）
func (u unionFind) same(x, y int) bool {
    return u.find(x) == u.find(y)
}

// 计算从 from 到 to 的相对距离
// 调用时需保证 from 和 to 在同一个集合中，否则返回值无意义
func (u unionFind) getRelativeDistance(from, to int) int {
    u.find(from)
    u.find(to)
    // to-from = (x-from) - (x-to) = dis[from] - dis[to]
    return u.dis[from] - u.dis[to]
}

// 合并 from 和 to，新增信息 to - from = value
// 其中 to 和 from 表示未知量，下文的 x 和 y 也表示未知量
// 如果 from 和 to 不在同一个集合，返回 true，否则返回是否与已知信息矛盾
func (u unionFind) merge(from, to int, value int) bool {
    x, y := u.find(from), u.find(to)
    if x == y { // from 和 to 在同一个集合，不做合并
        // to-from = (x-from) - (x-to) = dis[from] - dis[to] = value
        return u.dis[from]-u.dis[to] == value
    }
    //    x --------- y
    //   /           /
    // from ------- to
    // 已知 x-from = dis[from] 和 y-to = dis[to]，现在合并 from 和 to，新增信息 to-from = value
    // 由于 y-from = (y-x) + (x-from) = (y-to) + (to-from)
    // 所以 y-x = (to-from) + (y-to) - (x-from) = value + dis[to] - dis[from]
    u.dis[x] = value + u.dis[to] - u.dis[from] // 计算 x 到其代表元 y 的距离
    u.fa[x] = y
    return true
}`
        }
    },
    {
        title: "树状数组",
        data: {
"Python":
`class FenwickTree:
    def __init__(self, n: int):
        self.tree = [0] * (n + 1)  # 使用下标 1 到 n

    # a[i] 增加 val
    # 1 <= i <= n
    # 时间复杂度 O(log n)
    def update(self, i: int, val: int) -> None:
        t = self.tree
        while i < len(t):
            t[i] += val
            i += i & -i

    # 计算前缀和 a[1] + ... + a[i]
    # 1 <= i <= n
    # 时间复杂度 O(log n)
    def pre(self, i: int) -> int:
        t = self.tree
        res = 0
        while i > 0:
            res += t[i]
            i &= i - 1
        return res

    # 计算区间和 a[l] + ... + a[r]
    # 1 <= l <= r <= n
    # 时间复杂度 O(log n)
    def query(self, l: int, r: int) -> int:
        if r < l:
            return 0
        return self.pre(r) - self.pre(l - 1)
`,

"Java":
`class FenwickTree {
    private final long[] tree; // 如果计算结果没有超出 int 范围，可以改成 int

    public FenwickTree(int n) {
        tree = new long[n + 1]; // 使用下标 1 到 n
    }

    // a[i] 增加 val
    // 1 <= i <= n
    // 时间复杂度 O(log n)
    public void update(int i, long val) {
        for (; i < tree.length; i += i & -i) {
            tree[i] += val;
        }
    }

    // 求前缀和 a[1] + ... + a[i]
    // 1 <= i <= n
    // 时间复杂度 O(log n)
    public long pre(int i) {
        long res = 0;
        for (; i > 0; i &= i - 1) {
            res += tree[i];
        }
        return res;
    }

    // 求区间和 a[l] + ... + a[r]
    // 1 <= l <= r <= n
    // 时间复杂度 O(log n)
    public long query(int l, int r) {
        if (r < l) {
            return 0;
        }
        return pre(r) - pre(l - 1);
    }
}`,

"C++":
`// 根据题目用 FenwickTree<int> t(n) 或者 FenwickTree<long long> t(n) 初始化
template<typename T>
class FenwickTree {
    vector<T> tree;

public:
    // 使用下标 1 到 n
    FenwickTree(int n) : tree(n + 1) {}

    // a[i] 增加 val
    // 1 <= i <= n
    // 时间复杂度 O(log n)
    void update(int i, T val) {
        for (; i < tree.size(); i += i & -i) {
            tree[i] += val;
        }
    }

    // 求前缀和 a[1] + ... + a[i]
    // 1 <= i <= n
    // 时间复杂度 O(log n)
    T pre(int i) const {
        T res = 0;
        for (; i > 0; i &= i - 1) {
            res += tree[i];
        }
        return res;
    }

    // 求区间和 a[l] + ... + a[r]
    // 1 <= l <= r <= n
    // 时间复杂度 O(log n)
    T query(int l, int r) const {
        if (r < l) {
            return 0;
        }
        return pre(r) - pre(l - 1);
    }
};`,

"Go":
`type fenwick []int

func newFenwickTree(n int) fenwick {
    return make(fenwick, n+1) // 使用下标 1 到 n
}

// a[i] 增加 val
// 1 <= i <= n
// 时间复杂度 O(log n)
func (f fenwick) update(i int, val int) {
    for ; i < len(f); i += i & -i {
        f[i] += val
    }
}

// 求前缀和 a[1] + ... + a[i]
// 1 <= i <= n
// 时间复杂度 O(log n)
func (f fenwick) pre(i int) (res int) {
    for ; i > 0; i &= i - 1 {
        res += f[i]
    }
    return
}

// 求区间和 a[l] + ... + a[r]
// 1 <= l <= r <= n
// 时间复杂度 O(log n)
func (f fenwick) query(l, r int) int {
    if r < l {
        return 0
    }
    return f.pre(r) - f.pre(l-1)
}`
        }
    },
    {
        title: "线段树（无区间更新）",
        data: {
"Python":
`# 线段树有两个下标，一个是线段树节点的下标，另一个是线段树维护的区间的下标
# 节点的下标：从 1 开始，如果你想改成从 0 开始，需要把左右儿子下标分别改成 node*2+1 和 node*2+2
# 区间的下标：从 0 开始
class SegmentTree:
    def __init__(self, arr, default=0):
        # 线段树维护一个长为 n 的数组（下标从 0 到 n-1）
        # arr 可以是 list 或者 int
        # 如果 arr 是 int，视作数组大小，默认值为 default
        if isinstance(arr, int):
            arr = [default] * arr
        n = len(arr)
        self._n = n
        self._tree = [0] * (2 << (n - 1).bit_length())
        self._build(arr, 1, 0, n - 1)

    # 合并两个 val
    def _merge_val(self, a: int, b: int) -> int:
        return max(a, b)  # **根据题目修改**

    # 合并左右儿子的 val 到当前节点的 val
    def _maintain(self, node: int) -> None:
        self._tree[node] = self._merge_val(self._tree[node * 2], self._tree[node * 2 + 1])

    # 用 a 初始化线段树
    # 时间复杂度 O(n)
    def _build(self, a: List[int], node: int, l: int, r: int) -> None:
        if l == r:  # 叶子
            self._tree[node] = a[l]  # 初始化叶节点的值
            return
        m = (l + r) // 2
        self._build(a, node * 2, l, m)  # 初始化左子树
        self._build(a, node * 2 + 1, m + 1, r)  # 初始化右子树
        self._maintain(node)

    def _update(self, node: int, l: int, r: int, i: int, val: int) -> None:
        if l == r:  # 叶子（到达目标）
            # 如果想直接替换的话，可以写 self._tree[node] = val
            self._tree[node] = self._merge_val(self._tree[node], val)
            return
        m = (l + r) // 2
        if i <= m:  # i 在左子树
            self._update(node * 2, l, m, i, val)
        else:  # i 在右子树
            self._update(node * 2 + 1, m + 1, r, i, val)
        self._maintain(node)

    def _query(self, node: int, l: int, r: int, ql: int, qr: int) -> int:
        if ql <= l and r <= qr:  # 当前子树完全在 [ql, qr] 内
            return self._tree[node]
        m = (l + r) // 2
        if qr <= m:  # [ql, qr] 在左子树
            return self._query(node * 2, l, m, ql, qr)
        if ql > m:  # [ql, qr] 在右子树
            return self._query(node * 2 + 1, m + 1, r, ql, qr)
        l_res = self._query(node * 2, l, m, ql, qr)
        r_res = self._query(node * 2 + 1, m + 1, r, ql, qr)
        return self._merge_val(l_res, r_res)

    # 更新 a[i] 为 _merge_val(a[i], val)
    # 时间复杂度 O(log n)
    def update(self, i: int, val: int) -> None:
        self._update(1, 0, self._n - 1, i, val)

    # 返回用 _merge_val 合并所有 a[i] 的计算结果，其中 i 在闭区间 [ql, qr] 中
    # 时间复杂度 O(log n)
    def query(self, ql: int, qr: int) -> int:
        return self._query(1, 0, self._n - 1, ql, qr)

    # 获取 a[i] 的值
    # 时间复杂度 O(log n)
    def get(self, i: int) -> int:
        return self._query(1, 0, self._n - 1, i, i)
`,

"Java":
`// 线段树有两个下标，一个是线段树节点的下标，另一个是线段树维护的区间的下标
// 节点的下标：从 1 开始，如果你想改成从 0 开始，需要把左右儿子下标分别改成 node*2+1 和 node*2+2
// 区间的下标：从 0 开始
class SegmentTree {
    private final int n;
    private final long[] tree; // 如果计算结果没有超出 int 范围，可以改成 int

    // 合并两个 val
    private long mergeVal(long a, long b) {
        return Math.max(a, b); // **根据题目修改**
    }

    // 线段树维护一个长为 n 的数组（下标从 0 到 n-1），元素初始值为 initVal
    public SegmentTree(int n, long initVal) {
        this.n = n;
        long[] a = new long[n];
        Arrays.fill(a, initVal);
        tree = new long[2 << (32 - Integer.numberOfLeadingZeros(n - 1))];
        build(a, 1, 0, n - 1);
    }

    // 线段树维护数组 a
    public SegmentTree(long[] a) {
        n = a.length;
        tree = new long[2 << (32 - Integer.numberOfLeadingZeros(n - 1))];
        build(a, 1, 0, n - 1);
    }

    // 更新 a[i] 为 mergeVal(a[i], val)
    // 时间复杂度 O(log n)
    public void update(int i, long val) {
        update(1, 0, n - 1, i, val);
    }

    // 返回用 mergeVal 合并所有 a[i] 的计算结果，其中 i 在闭区间 [ql, qr] 中
    // 时间复杂度 O(log n)
    public long query(int ql, int qr) {
        return query(1, 0, n - 1, ql, qr);
    }

    // 获取 a[i] 的值
    // 时间复杂度 O(log n)
    public long get(int i) {
        return query(1, 0, n - 1, i, i);
    }

    // 合并左右儿子的 val 到当前节点的 val
    private void maintain(int node) {
        tree[node] = mergeVal(tree[node * 2], tree[node * 2 + 1]);
    }

    // 用 a 初始化线段树
    // 时间复杂度 O(n)
    private void build(long[] a, int node, int l, int r) {
        if (l == r) { // 叶子
            tree[node] = a[l]; // 初始化叶节点的值
            return;
        }
        int m = (l + r) / 2;
        build(a, node * 2, l, m); // 初始化左子树
        build(a, node * 2 + 1, m + 1, r); // 初始化右子树
        maintain(node);
    }

    private void update(int node, int l, int r, int i, long val) {
        if (l == r) { // 叶子（到达目标）
            // 如果想直接替换的话，可以写 tree[node] = val
            tree[node] = mergeVal(tree[node], val);
            return;
        }
        int m = (l + r) / 2;
        if (i <= m) { // i 在左子树
            update(node * 2, l, m, i, val);
        } else { // i 在右子树
            update(node * 2 + 1, m + 1, r, i, val);
        }
        maintain(node);
    }

    private long query(int node, int l, int r, int ql, int qr) {
        if (ql <= l && r <= qr) { // 当前子树完全在 [ql, qr] 内
            return tree[node];
        }
        int m = (l + r) / 2;
        if (qr <= m) { // [ql, qr] 在左子树
            return query(node * 2, l, m, ql, qr);
        }
        if (ql > m) { // [ql, qr] 在右子树
            return query(node * 2 + 1, m + 1, r, ql, qr);
        }
        long lRes = query(node * 2, l, m, ql, qr);
        long rRes = query(node * 2 + 1, m + 1, r, ql, qr);
        return mergeVal(lRes, rRes);
    }
}`,

"C++":
`// 线段树有两个下标，一个是线段树节点的下标，另一个是线段树维护的区间的下标
// 节点的下标：从 1 开始，如果你想改成从 0 开始，需要把左右儿子下标分别改成 node*2+1 和 node*2+2
// 区间的下标：从 0 开始
template<typename T>
class SegmentTree {
    // 注：也可以去掉 template<typename T>，改在这里定义 T
    // using T = pair<int, int>;

    int n;
    vector<T> tree;

    // 合并两个 val
    T merge_val(T a, T b) const {
        return max(a, b); // **根据题目修改**
    }

    // 合并左右儿子的 val 到当前节点的 val
    void maintain(int node) {
        tree[node] = merge_val(tree[node * 2], tree[node * 2 + 1]);
    }

    // 用 a 初始化线段树
    // 时间复杂度 O(n)
    void build(const vector<T>& a, int node, int l, int r) {
        if (l == r) { // 叶子
            tree[node] = a[l]; // 初始化叶节点的值
            return;
        }
        int m = (l + r) / 2;
        build(a, node * 2, l, m); // 初始化左子树
        build(a, node * 2 + 1, m + 1, r); // 初始化右子树
        maintain(node);
    }

    void update(int node, int l, int r, int i, T val) {
        if (l == r) { // 叶子（到达目标）
            // 如果想直接替换的话，可以写 tree[node] = val
            tree[node] = merge_val(tree[node], val);
            return;
        }
        int m = (l + r) / 2;
        if (i <= m) { // i 在左子树
            update(node * 2, l, m, i, val);
        } else { // i 在右子树
            update(node * 2 + 1, m + 1, r, i, val);
        }
        maintain(node);
    }

    T query(int node, int l, int r, int ql, int qr) const {
        if (ql <= l && r <= qr) { // 当前子树完全在 [ql, qr] 内
            return tree[node];
        }
        int m = (l + r) / 2;
        if (qr <= m) { // [ql, qr] 在左子树
            return query(node * 2, l, m, ql, qr);
        }
        if (ql > m) { // [ql, qr] 在右子树
            return query(node * 2 + 1, m + 1, r, ql, qr);
        }
        T l_res = query(node * 2, l, m, ql, qr);
        T r_res = query(node * 2 + 1, m + 1, r, ql, qr);
        return merge_val(l_res, r_res);
    }

public:
    // 线段树维护一个长为 n 的数组（下标从 0 到 n-1），元素初始值为 init_val
    SegmentTree(int n, T init_val) : SegmentTree(vector<T>(n, init_val)) {}

    // 线段树维护数组 a
    SegmentTree(const vector<T>& a) : n(a.size()), tree(2 << bit_width(a.size() - 1)) {
        build(a, 1, 0, n - 1);
    }

    // 更新 a[i] 为 merge_val(a[i], val)
    // 时间复杂度 O(log n)
    void update(int i, T val) {
        update(1, 0, n - 1, i, val);
    }

    // 返回用 merge_val 合并所有 a[i] 的计算结果，其中 i 在闭区间 [ql, qr] 中
    // 时间复杂度 O(log n)
    T query(int ql, int qr) const {
        return query(1, 0, n - 1, ql, qr);
    }

    // 获取 a[i] 的值
    // 时间复杂度 O(log n)
    T get(int i) const {
        return query(1, 0, n - 1, i, i);
    }
};

int main() {
    SegmentTree t(8, 0LL); // 如果这里写 0LL，那么 SegmentTree 存储的就是 long long 数据
    t.update(0, 1LL << 60);
    cout << t.query(0, 7) << endl;

    vector<int> nums = {3, 1, 4, 1, 5, 9, 2, 6};
    // 注意：如果要让 SegmentTree 存储 long long 数据，需要传入 vector<long long>
    SegmentTree t2(nums); // 这里 SegmentTree 存储的是 int 数据
    cout << t2.query(0, 7) << endl;
    return 0;
}`,

"Go":
`// 模板来源 https://leetcode.cn/circle/discuss/mOr1u6/
// 线段树有两个下标，一个是线段树节点的下标，另一个是线段树维护的区间的下标
// 节点的下标：从 1 开始，如果你想改成从 0 开始，需要把左右儿子下标分别改成 node*2+1 和 node*2+2
// 区间的下标：从 0 开始
type seg []struct {
    val int // **根据题目修改**
}

// 合并两个 val
func (seg) mergeVal(a, b int) int {
    return max(a, b) // **根据题目修改**
}

// 线段树维护一个长为 n 的数组（下标从 0 到 n-1），元素初始值为 initVal
func newSegmentTree(n int, initVal int) seg {
    a := make([]int, n)
    for i := range a {
        a[i] = initVal
    }
    return newSegmentTreeWithArray(a)
}

// 线段树维护数组 a
func newSegmentTreeWithArray(a []int) seg {
    n := len(a)
    t := make(seg, 2<<bits.Len(uint(n-1)))
    t.build(a, 1, 0, n-1)
    return t
}

// 合并左右儿子的 val 到当前节点的 val
func (t seg) maintain(node int) {
    t[node].val = t.mergeVal(t[node*2].val, t[node*2+1].val)
}

// 用 a 初始化线段树
// 时间复杂度 O(n)
func (t seg) build(a []int, node, l, r int) {
    if l == r { // 叶子
        t[node].val = a[l] // 初始化叶节点的值
        return
    }
    m := (l + r) / 2
    t.build(a, node*2, l, m) // 初始化左子树
    t.build(a, node*2+1, m+1, r) // 初始化右子树
    t.maintain(node)
}

// 更新 a[i] 为 mergeVal(a[i], val)
// 调用 t.update(1, 0, n-1, i, val)
// 0 <= i <= n-1
// 时间复杂度 O(log n)
func (t seg) update(node, l, r, i int, val int) {
    if l == r { // 叶子（到达目标）
        // 如果想直接替换的话，可以写 t[o].val = val
        t[node].val = t.mergeVal(t[node].val, val)
        return
    }
    m := (l + r) / 2
    if i <= m { // i 在左子树
        t.update(node*2, l, m, i, val)
    } else { // i 在右子树
        t.update(node*2+1, m+1, r, i, val)
    }
    t.maintain(node)
}

// 返回用 mergeVal 合并所有 a[i] 的计算结果，其中 i 在闭区间 [ql, qr] 中
// 调用 t.query(1, 0, n-1, ql, qr)
// 如果只想获取 a[i]，可以调用 t.query(1, 0, n-1, i, i)
// 0 <= ql <= qr <= n-1
// 时间复杂度 O(log n)
func (t seg) query(node, l, r, ql, qr int) int {
    if ql <= l && r <= qr { // 当前子树完全在 [ql, qr] 内
        return t[node].val
    }
    m := (l + r) / 2
    if qr <= m { // [ql, qr] 在左子树
        return t.query(node*2, l, m, ql, qr)
    }
    if ql > m { // [ql, qr] 在右子树
        return t.query(node*2+1, m+1, r, ql, qr)
    }
    lRes := t.query(node*2, l, m, ql, qr)
    rRes := t.query(node*2+1, m+1, r, ql, qr)
    return t.mergeVal(lRes, rRes)
}`
        }
    },
    {
        title: "Lazy 线段树（有区间更新）",
        data: {
"Python":
`class Node:
    __slots__ = 'val', 'todo'

class LazySegmentTree:
    # 懒标记初始值
    _TODO_INIT = 0  # **根据题目修改**

    def __init__(self, arr, default=0):
        # 线段树维护一个长为 n 的数组（下标从 0 到 n-1）
        # arr 可以是 list 或者 int
        # 如果 arr 是 int，视作数组大小，默认值为 default
        if isinstance(arr, int):
            arr = [default] * arr
        n = len(arr)
        self._n = n
        self._tree = [Node() for _ in range(2 << (n - 1).bit_length())]
        self._build(arr, 1, 0, n - 1)

    # 合并两个 val
    def _merge_val(self, a: int, b: int) -> int:
        return a + b  # **根据题目修改**

    # 合并两个懒标记
    def _merge_todo(self, a: int, b: int) -> int:
        return a + b  # **根据题目修改**

    # 把懒标记作用到 node 子树（本例为区间加）
    def _apply(self, node: int, l: int, r: int, todo: int) -> None:
        cur = self._tree[node]
        # 计算 tree[node] 区间的整体变化
        cur.val += todo * (r - l + 1)  # **根据题目修改**
        cur.todo = self._merge_todo(todo, cur.todo)

    # 把当前节点的懒标记下传给左右儿子
    def _spread(self, node: int, l: int, r: int) -> None:
        todo = self._tree[node].todo
        if todo == self._TODO_INIT:  # 没有需要下传的信息
            return
        m = (l + r) // 2
        self._apply(node * 2, l, m, todo)
        self._apply(node * 2 + 1, m + 1, r, todo)
        self._tree[node].todo = self._TODO_INIT  # 下传完毕

    # 合并左右儿子的 val 到当前节点的 val
    def _maintain(self, node: int) -> None:
        self._tree[node].val = self._merge_val(self._tree[node * 2].val, self._tree[node * 2 + 1].val)

    # 用 a 初始化线段树
    # 时间复杂度 O(n)
    def _build(self, a: List[int], node: int, l: int, r: int) -> None:
        self._tree[node].todo = self._TODO_INIT
        if l == r:  # 叶子
            self._tree[node].val = a[l]  # 初始化叶节点的值
            return
        m = (l + r) // 2
        self._build(a, node * 2, l, m)  # 初始化左子树
        self._build(a, node * 2 + 1, m + 1, r)  # 初始化右子树
        self._maintain(node)

    def _update(self, node: int, l: int, r: int, ql: int, qr: int, f: int) -> None:
        if ql <= l and r <= qr:  # 当前子树完全在 [ql, qr] 内
            self._apply(node, l, r, f)
            return
        self._spread(node, l, r)
        m = (l + r) // 2
        if ql <= m:  # 更新左子树
            self._update(node * 2, l, m, ql, qr, f)
        if qr > m:  # 更新右子树
            self._update(node * 2 + 1, m + 1, r, ql, qr, f)
        self._maintain(node)

    def _query(self, node: int, l: int, r: int, ql: int, qr: int) -> int:
        if ql <= l and r <= qr:  # 当前子树完全在 [ql, qr] 内
            return self._tree[node].val
        self._spread(node, l, r)
        m = (l + r) // 2
        if qr <= m:  # [ql, qr] 在左子树
            return self._query(node * 2, l, m, ql, qr)
        if ql > m:  # [ql, qr] 在右子树
            return self._query(node * 2 + 1, m + 1, r, ql, qr)
        l_res = self._query(node * 2, l, m, ql, qr)
        r_res = self._query(node * 2 + 1, m + 1, r, ql, qr)
        return self._merge_val(l_res, r_res)

    # 用 f 更新 [ql, qr] 中的每个 a[i]
    # 0 <= ql <= qr <= n-1
    # 时间复杂度 O(log n)
    def update(self, ql: int, qr: int, f: int) -> None:
        self._update(1, 0, self._n - 1, ql, qr, f)

    # 返回用 _merge_val 合并所有 a[i] 的计算结果，其中 i 在闭区间 [ql, qr] 中
    # 0 <= ql <= qr <= n-1
    # 时间复杂度 O(log n)
    def query(self, ql: int, qr: int) -> int:
        return self._query(1, 0, self._n - 1, ql, qr)
`,

"Java":
`class LazySegmentTree {
    // 懒标记初始值
    private static final long TODO_INIT = 0; // **根据题目修改**

    private static final class Node {
        long val; // **根据题目修改**
        long todo;
    }

    // 合并两个 val
    private long mergeVal(long a, long b) {
        return a + b; // **根据题目修改**
    }

    // 合并两个懒标记
    private long mergeTodo(long a, long b) {
        return a + b; // **根据题目修改**
    }

    // 把懒标记作用到 node 子树（本例为区间加）
    private void apply(int node, int l, int r, long todo) {
        Node cur = tree[node];
        // 计算 tree[node] 区间的整体变化
        cur.val += todo * (r - l + 1); // **根据题目修改**
        cur.todo = mergeTodo(todo, cur.todo);
    }

    private final int n;
    private final Node[] tree;

    // 线段树维护一个长为 n 的数组（下标从 0 到 n-1），元素初始值为 initVal
    public LazySegmentTree(int n, long initVal) {
        this.n = n;
        long[] a = new long[n];
        Arrays.fill(a, initVal);
        tree = new Node[2 << (32 - Integer.numberOfLeadingZeros(n - 1))];
        build(a, 1, 0, n - 1);
    }

    // 线段树维护数组 a
    public LazySegmentTree(long[] a) {
        n = a.length;
        tree = new Node[2 << (32 - Integer.numberOfLeadingZeros(n - 1))];
        build(a, 1, 0, n - 1);
    }

    // 用 f 更新 [ql, qr] 中的每个 a[i]
    // 0 <= ql <= qr <= n-1
    // 时间复杂度 O(log n)
    public void update(int ql, int qr, long f) {
        update(1, 0, n - 1, ql, qr, f);
    }

    // 返回用 mergeVal 合并所有 a[i] 的计算结果，其中 i 在闭区间 [ql, qr] 中
    // 0 <= ql <= qr <= n-1
    // 时间复杂度 O(log n)
    public long query(int ql, int qr) {
        return query(1, 0, n - 1, ql, qr);
    }

    // 把当前节点的懒标记下传给左右儿子
    private void spread(int node, int l, int r) {
        long todo = tree[node].todo;
        if (todo == TODO_INIT) { // 没有需要下传的信息
            return;
        }
        int m = (l + r) / 2;
        apply(node * 2, l, m, todo);
        apply(node * 2 + 1, m + 1, r, todo);
        tree[node].todo = TODO_INIT; // 下传完毕
    }

    // 合并左右儿子的 val 到当前节点的 val
    private void maintain(int node) {
        tree[node].val = mergeVal(tree[node * 2].val, tree[node * 2 + 1].val);
    }

    // 用 a 初始化线段树
    // 时间复杂度 O(n)
    private void build(long[] a, int node, int l, int r) {
        tree[node] = new Node();
        tree[node].todo = TODO_INIT;
        if (l == r) { // 叶子
            tree[node].val = a[l]; // 初始化叶节点的值
            return;
        }
        int m = (l + r) / 2;
        build(a, node * 2, l, m); // 初始化左子树
        build(a, node * 2 + 1, m + 1, r); // 初始化右子树
        maintain(node);
    }

    private void update(int node, int l, int r, int ql, int qr, long f) {
        if (ql <= l && r <= qr) { // 当前子树完全在 [ql, qr] 内
            apply(node, l, r, f);
            return;
        }
        spread(node, l, r);
        int m = (l + r) / 2;
        if (ql <= m) { // 更新左子树
            update(node * 2, l, m, ql, qr, f);
        }
        if (qr > m) { // 更新右子树
            update(node * 2 + 1, m + 1, r, ql, qr, f);
        }
        maintain(node);
    }

    private long query(int node, int l, int r, int ql, int qr) {
        if (ql <= l && r <= qr) { // 当前子树完全在 [ql, qr] 内
            return tree[node].val;
        }
        spread(node, l, r);
        int m = (l + r) / 2;
        if (qr <= m) { // [ql, qr] 在左子树
            return query(node * 2, l, m, ql, qr);
        }
        if (ql > m) { // [ql, qr] 在右子树
            return query(node * 2 + 1, m + 1, r, ql, qr);
        }
        long lRes = query(node * 2, l, m, ql, qr);
        long rRes = query(node * 2 + 1, m + 1, r, ql, qr);
        return mergeVal(lRes, rRes);
    }
}`,

"C++":
`template<typename T, typename F>
class LazySegmentTree {
    // 注：也可以去掉 template<typename T, typename F>，改在这里定义 T 和 F
    // using T = pair<int, int>;
    // using F = pair<int, int>;

    // 懒标记初始值
    const F TODO_INIT = 0; // **根据题目修改**

    struct Node {
        T val;
        F todo;
    };

    int n;
    vector<Node> tree;

    // 合并两个 val
    T merge_val(const T& a, const T& b) const {
        return a + b; // **根据题目修改**
    }

    // 合并两个懒标记
    F merge_todo(const F& a, const F& b) const {
        return a + b; // **根据题目修改**
    }

    // 把懒标记作用到 node 子树（本例为区间加）
    void apply(int node, int l, int r, F todo) {
        Node& cur = tree[node];
        // 计算 tree[node] 区间的整体变化
        cur.val += todo * (r - l + 1); // **根据题目修改**
        cur.todo = merge_todo(todo, cur.todo);
    }

    // 把当前节点的懒标记下传给左右儿子
    void spread(int node, int l, int r) {
        Node& cur = tree[node];
        F todo = cur.todo;
        if (todo == TODO_INIT) { // 没有需要下传的信息
            return;
        }
        int m = (l + r) / 2;
        apply(node * 2, l, m, todo);
        apply(node * 2 + 1, m + 1, r, todo);
        cur.todo = TODO_INIT; // 下传完毕
    }

    // 合并左右儿子的 val 到当前节点的 val
    void maintain(int node) {
        tree[node].val = merge_val(tree[node * 2].val, tree[node * 2 + 1].val);
    }

    // 用 a 初始化线段树
    // 时间复杂度 O(n)
    void build(const vector<T>& a, int node, int l, int r) {
        Node& cur = tree[node];
        cur.todo = TODO_INIT;
        if (l == r) { // 叶子
            cur.val = a[l]; // 初始化叶节点的值
            return;
        }
        int m = (l + r) / 2;
        build(a, node * 2, l, m); // 初始化左子树
        build(a, node * 2 + 1, m + 1, r); // 初始化右子树
        maintain(node);
    }

    void update(int node, int l, int r, int ql, int qr, F f) {
        if (ql <= l && r <= qr) { // 当前子树完全在 [ql, qr] 内
            apply(node, l, r, f);
            return;
        }
        spread(node, l, r);
        int m = (l + r) / 2;
        if (ql <= m) { // 更新左子树
            update(node * 2, l, m, ql, qr, f);
        }
        if (qr > m) { // 更新右子树
            update(node * 2 + 1, m + 1, r, ql, qr, f);
        }
        maintain(node);
    }

    T query(int node, int l, int r, int ql, int qr) {
        if (ql <= l && r <= qr) { // 当前子树完全在 [ql, qr] 内
            return tree[node].val;
        }
        spread(node, l, r);
        int m = (l + r) / 2;
        if (qr <= m) { // [ql, qr] 在左子树
            return query(node * 2, l, m, ql, qr);
        }
        if (ql > m) { // [ql, qr] 在右子树
            return query(node * 2 + 1, m + 1, r, ql, qr);
        }
        T l_res = query(node * 2, l, m, ql, qr);
        T r_res = query(node * 2 + 1, m + 1, r, ql, qr);
        return merge_val(l_res, r_res);
    }

public:
    // 线段树维护一个长为 n 的数组（下标从 0 到 n-1），元素初始值为 init_val
    LazySegmentTree(int n, T init_val = 0) : LazySegmentTree(vector<T>(n, init_val)) {}

    // 线段树维护数组 a
    LazySegmentTree(const vector<T>& a) : n(a.size()), tree(2 << bit_width(a.size() - 1)) {
        build(a, 1, 0, n - 1);
    }

    // 用 f 更新 [ql, qr] 中的每个 a[i]
    // 0 <= ql <= qr <= n-1
    // 时间复杂度 O(log n)
    void update(int ql, int qr, F f) {
        update(1, 0, n - 1, ql, qr, f);
    }

    // 返回用 merge_val 合并所有 a[i] 的计算结果，其中 i 在闭区间 [ql, qr] 中
    // 0 <= ql <= qr <= n-1
    // 时间复杂度 O(log n)
    T query(int ql, int qr) {
        return query(1, 0, n - 1, ql, qr);
    }
};

int main() {
    LazySegmentTree<long long, long long> t(8); // 默认值为 0
    t.update(3, 5, 100);
    t.update(4, 6, 10);
    cout << t.query(0, 7) << endl;

    vector<long long> nums = {3, 1, 4, 1, 5, 9, 2, 6};
    LazySegmentTree<long long, long long> t2(nums);
    t2.update(3, 5, 1);
    t2.update(4, 6, 1);
    cout << t2.query(0, 7) << endl;
    return 0;
}`,

"Go":
`// 懒标记初始值
const todoInit int = 0 // **根据题目修改**

type lazySeg []struct {
    val  int // **根据题目修改**
    todo int
}

// 合并两个 val
func (lazySeg) mergeVal(a, b int) int {
    return a + b // **根据题目修改**
}

// 合并两个懒标记
func (lazySeg) mergeTodo(a, b int) int {
    return a + b // **根据题目修改**
}

// 把懒标记作用到 node 子树（本例为区间加）
func (t lazySeg) apply(node, l, r int, todo int) {
    cur := &t[node]
    // 计算 tree[node] 区间的整体变化
    cur.val += todo * (r - l + 1) // **根据题目修改**
    cur.todo = t.mergeTodo(todo, cur.todo)
}

// 线段树维护一个长为 n 的数组（下标从 0 到 n-1），元素初始值为 initVal
func newLazySegmentTree(n int, initVal int) lazySeg {
    a := make([]int, n)
    for i := range a {
        a[i] = initVal
    }
    return newLazySegmentTreeWithArray(a)
}

// 线段树维护数组 a
func newLazySegmentTreeWithArray(a []int) lazySeg {
    n := len(a)
    t := make(lazySeg, 2<<bits.Len(uint(n-1)))
    t.build(a, 1, 0, n-1)
    return t
}

// 把当前节点的懒标记下传给左右儿子
func (t lazySeg) spread(node, l, r int) {
    // 类似「断点续传」，接着完成之前没完成的下传任务
    todo := t[node].todo
    if todo == todoInit { // 没有需要下传的信息
        return
    }
    m := (l + r) / 2
    t.apply(node*2, l, m, todo)
    t.apply(node*2+1, m+1, r, todo)
    t[node].todo = todoInit // 下传完毕
}

// 合并左右儿子的 val 到当前节点的 val
func (t lazySeg) maintain(node int) {
    t[node].val = t.mergeVal(t[node*2].val, t[node*2+1].val)
}

// 用 a 初始化线段树
// 时间复杂度 O(n)
func (t lazySeg) build(a []int, node, l, r int) {
    t[node].todo = todoInit
    if l == r { // 叶子
        t[node].val = a[l] // 初始化叶节点的值
        return
    }
    m := (l + r) / 2
    t.build(a, node*2, l, m) // 初始化左子树
    t.build(a, node*2+1, m+1, r) // 初始化右子树
    t.maintain(node)
}

// 用 f 更新 [ql, qr] 中的每个 a[i]
// 调用 t.update(1, 0, n-1, ql, qr, f)
// 0 <= ql <= qr <= n-1
// 时间复杂度 O(log n)
func (t lazySeg) update(node, l, r, ql, qr int, f int) {
    if ql <= l && r <= qr { // 当前子树完全在 [ql, qr] 内
        t.apply(node, l, r, f)
        return
    }
    t.spread(node, l, r)
    m := (l + r) / 2
    if ql <= m { // 更新左子树
        t.update(node*2, l, m, ql, qr, f)
    }
    if qr > m { // 更新右子树
        t.update(node*2+1, m+1, r, ql, qr, f)
    }
    t.maintain(node)
}

// 返回用 mergeVal 合并所有 a[i] 的计算结果，其中 i 在闭区间 [ql, qr] 中
// 调用 t.query(1, 0, n-1, ql, qr)
// 0 <= ql <= qr <= n-1
// 时间复杂度 O(log n)
func (t lazySeg) query(node, l, r, ql, qr int) int {
    if ql <= l && r <= qr { // 当前子树完全在 [ql, qr] 内
        return t[node].val
    }
    t.spread(node, l, r)
    m := (l + r) / 2
    if qr <= m { // [ql, qr] 在左子树
        return t.query(node*2, l, m, ql, qr)
    }
    if ql > m { // [ql, qr] 在右子树
        return t.query(node*2+1, m+1, r, ql, qr)
    }
    lRes := t.query(node*2, l, m, ql, qr)
    rRes := t.query(node*2+1, m+1, r, ql, qr)
    return t.mergeVal(lRes, rRes)
}`
        }
    },
    {
        title: "ST表",
        data: {
"Python":
`class SparseTable:
    # 时间复杂度 O(n * log n)
    def __init__(self, nums: List[int], op: Callable[[int, int], int]):
        n = len(nums)
        w = n.bit_length()
        st = [[0] * n for _ in range(w)]
        st[0] = nums[:]
        for i in range(1, w):
            for j in range(n - (1 << i) + 1):
                st[i][j] = op(st[i - 1][j], st[i - 1][j + (1 << (i - 1))])
        self.st = st
        self.op = op

    # [l, r) 左闭右开，下标从 0 开始
    # 返回 op(nums[l:r])
    # 时间复杂度 O(1)
    def query(self, l: int, r: int) -> int:
        k = (r - l).bit_length() - 1
        return self.op(self.st[k][l], self.st[k][r - (1 << k)])


# 使用方法举例
nums = [3, 1, 4, 1, 5, 9, 2, 6]
st = SparseTable(nums, max)
print(st.query(0, 5))  # max(nums[0:5]) = 5
print(st.query(1, 1))  # 错误：必须保证 l < r
`,

"Java":
`class SparseTable {
    private final int[][] stMin;
    private final int[][] stMax;

    // 时间复杂度 O(n * log n)
    public SparseTable(int[] nums) {
        int n = nums.length;
        int w = 32 - Integer.numberOfLeadingZeros(n);
        stMin = new int[w][n];
        stMax = new int[w][n];

        for (int j = 0; j < n; j++) {
            stMin[0][j] = nums[j];
            stMax[0][j] = nums[j];
        }

        for (int i = 1; i < w; i++) {
            for (int j = 0; j + (1 << i) <= n; j++) {
                stMin[i][j] = Math.min(stMin[i - 1][j], stMin[i - 1][j + (1 << (i - 1))]);
                stMax[i][j] = Math.max(stMax[i - 1][j], stMax[i - 1][j + (1 << (i - 1))]);
            }
        }
    }

    // [l, r) 左闭右开，下标从 0 开始
    // 必须保证 l < r
    // 时间复杂度 O(1)
    public int queryMin(int l, int r) {
        int k = 31 - Integer.numberOfLeadingZeros(r - l);
        return Math.min(stMin[k][l], stMin[k][r - (1 << k)]);
    }

    // [l, r) 左闭右开，下标从 0 开始
    // 必须保证 l < r
    // 时间复杂度 O(1)
    public int queryMax(int l, int r) {
        int k = 31 - Integer.numberOfLeadingZeros(r - l);
        return Math.max(stMax[k][l], stMax[k][r - (1 << k)]);
    }
}`,

"C++":
`class SparseTable {
    vector<vector<int>> st_min;
    vector<vector<int>> st_max;

public:
    // 时间复杂度 O(n * log n)
    SparseTable(const vector<int>& nums) {
        size_t n = nums.size();
        int w = bit_width(n);
        st_min.resize(w, vector<int>(n));
        st_max.resize(w, vector<int>(n));

        for (int j = 0; j < n; j++) {
            st_min[0][j] = nums[j];
            st_max[0][j] = nums[j];
        }

        for (int i = 1; i < w; i++) {
            for (int j = 0; j + (1 << i) <= n; j++) {
                st_min[i][j] = min(st_min[i - 1][j], st_min[i - 1][j + (1 << (i - 1))]);
                st_max[i][j] = max(st_max[i - 1][j], st_max[i - 1][j + (1 << (i - 1))]);
            }
        }
    }

    // [l, r) 左闭右开，下标从 0 开始
    // 必须保证 l < r
    // 时间复杂度 O(1)
    int query_min(int l, int r) const {
        int k = bit_width((uint32_t) r - l) - 1;
        return min(st_min[k][l], st_min[k][r - (1 << k)]);
    }

    // [l, r) 左闭右开，下标从 0 开始
    // 必须保证 l < r
    // 时间复杂度 O(1)
    int query_max(int l, int r) const {
        int k = bit_width((uint32_t) r - l) - 1;
        return max(st_max[k][l], st_max[k][r - (1 << k)]);
    }
};`,

"Go":
`type sparseTable[T any] struct {
    st [][]T
    op func(T, T) T
}

// 时间复杂度 O(n * log n)
func newSparseTable[T any](nums []T, op func(T, T) T) sparseTable[T] {
    n := len(nums)
    w := bits.Len(uint(n))
    st := make([][]T, w)
    for i := range st {
        st[i] = make([]T, n)
    }
    copy(st[0], nums)
    for i := 1; i < w; i++ {
        for j := range n - 1<<i + 1 {
            st[i][j] = op(st[i-1][j], st[i-1][j+1<<(i-1)])
        }
    }
    return sparseTable[T]{st, op}
}

// [l, r) 左闭右开，下标从 0 开始
// 返回 op(nums[l:r])
// 时间复杂度 O(1)
func (s sparseTable[T]) query(l, r int) T {
    k := bits.Len(uint(r-l)) - 1
    return s.op(s.st[k][l], s.st[k][r-1<<k])
}

// 使用方法举例
func main() {
    nums := []int{3, 1, 4, 1, 5, 9, 2, 6}
    st := newSparseTable(nums, func(a, b int) int { return max(a, b) })
    fmt.Println(st.query(0, 5)) // 5
    fmt.Println(st.query(1, 1)) // 错误：必须保证 l < r
}`
        }
    },
    {
        title: "判断质数",
        data: {
"Python":
`# 时间复杂度 O(sqrt(n))
def is_prime(n: int) -> bool:
    for i in range(2, isqrt(n) + 1):
        if n % i == 0:
            return False
    return n >= 2  # 1 不是质数
`,

"Java":
`class Solution {
    // 时间复杂度 O(sqrt(n))
    private boolean isPrime(int n) {
        for (int i = 2; i * i <= n; i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return n >= 2; // 1 不是质数
    }
}`,

"C++":
`// 时间复杂度 O(sqrt(n))
bool is_prime(int n) {
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return n >= 2; // 1 不是质数
}`,

"Go":
`// 时间复杂度 O(sqrt(n))
func isPrime(n int) bool {
    for i := 2; i*i <= n; i++ {
        if n%i == 0 {
            return false
        }
    }
    return n >= 2 // 1 不是质数
}`      }
    },
    {
        title: "埃氏筛",
        data: {
"Python":
`# 时间复杂度 O(MX * log log MX)
MX = 1_000_001
is_prime = [False] * 2 + [True] * (MX - 2)  # 0 和 1 不是质数
primes = []
for i in range(2, MX):
    if is_prime[i]:
        primes.append(i)
        for j in range(i * i, MX, i):
            is_prime[j] = False  # j 是质数 i 的倍数
`,

"Java":
`// 时间复杂度 O(MX * log log MX)
class Solution {
    private static final int MX = 1_000_001;
    private static final boolean[] isPrime = new boolean[MX];
    private static final List<Integer> primes = new ArrayList<>();
    private static boolean initialized = false;

    // 这样写比 static block 快
    public Solution() {
        if (initialized) {
            return;
        }
        initialized = true;

        Arrays.fill(isPrime, true);
        isPrime[0] = isPrime[1] = false; // 0 和 1 不是质数
        for (int i = 2; i < MX; i++) {
            if (isPrime[i]) {
                primes.add(i);
                for (long j = (long) i * i; j < MX; j += i) {
                    isPrime[(int) j] = false; // j 是质数 i 的倍数
                }
            }
        }
    }

    public int solve(int[] nums) {
        
    }
}`,

"C++":
`// 时间复杂度 O(MX * log log MX)
constexpr int MX = 1'000'001;
bool is_prime[MX];
vector<int> primes;

auto init = [] {
    ranges::fill(is_prime, true);
    is_prime[0] = is_prime[1] = false; // 0 和 1 不是质数
    for (int i = 2; i < MX; i++) {
        if (is_prime[i]) {
            primes.push_back(i);
            for (long long j = 1LL * i * i; j < MX; j += i) {
                is_prime[j] = false; // j 是质数 i 的倍数
            }
        }
    }
    return 0;
}();`,

"Go":
`// 时间复杂度 O(mx * log log mx)
const mx = 1_000_001

var np = [mx]bool{true, true} // 0 和 1 不是质数
var primes []int

func init() {
    for i := 2; i < mx; i++ {
        if !np[i] {
            primes = append(primes, i)
            for j := i * i; j < mx; j += i {
                np[j] = true
            }
        }
    }
}`,
        }
    },
    {
        title: "质因数分解",
        data: {
"Python":
`MX = 1_000_001
lpf = [0] * MX
for i in range(2, MX):
    if lpf[i] == 0:  # i 是质数
        for j in range(i, MX, i):
            if lpf[j] == 0:  # 首次访问 j
                lpf[j] = i

# 质因数分解
# 例如 prime_factorization(45) = [(3, 2), (5, 1)]，表示 45 = 3**2 * 5**1
# 时间复杂度 O(log x)
def prime_factorization(x: int) -> List[Tuple[int, int]]:
    res = []
    while x > 1:
        p = lpf[x]
        e = 1
        x //= p
        while x % p == 0:
            e += 1
            x //= p
        res.append((p, e))
    return res
`,

"Java":
`class Solution {
    private static final int MX = 1_000_001;
    private static final int[] lpf = new int[MX];
    private static boolean initialized = false;

    // 这样写比 static block 快
    public Solution() {
        if (initialized) {
            return;
        }
        initialized = true;

        for (int i = 2; i < MX; i++) {
            if (lpf[i] == 0) { // i 是质数
                for (int j = i; j < MX; j += i) {
                    if (lpf[j] == 0) { // 首次访问 j
                        lpf[j] = i;
                    }
                }
            }
        }
    }

    // 质因数分解
    // 例如 primeFactorization(45) = [[3, 2], [5, 1]]，表示 45 = 3^2 * 5^1
    // 时间复杂度 O(log x)
    private List<int[]> primeFactorization(int x) {
        List<int[]> res = new ArrayList<>();
        while (x > 1) {
            int p = lpf[x];
            int e = 1;
            for (x /= p; x % p == 0; x /= p) {
                e++;
            }
            res.add(new int[]{p, e});
        }
        return res;
    }

    public int solve(int[] nums) {
        
    }
}`,

"C++":
`constexpr int MX = 1'000'001;
int lpf[MX];

int init = [] {
    for (int i = 2; i < MX; i++) {
        if (lpf[i] == 0) { // i 是质数
            for (int j = i; j < MX; j += i) {
                if (lpf[j] == 0) { // 首次访问 j
                    lpf[j] = i;
                }
            }
        }
    }
    return 0;
}();

// 质因数分解
// 例如 prime_factorization(45) = {{3, 2}, {5, 1}}，表示 45 = 3^2 * 5^1
// 时间复杂度 O(log x)
vector<pair<int, int>> prime_factorization(int x) {
    vector<pair<int, int>> res;
    while (x > 1) {
        int p = lpf[x];
        int e = 1;
        for (x /= p; x % p == 0; x /= p) {
            e++;
        }
        res.emplace_back(p, e);
    }
    return res;
}`,

"Go":
`const mx = 1_000_001

var lpf = [mx]int{}

func init() {
	for i := 2; i < mx; i++ {
		if lpf[i] == 0 { // i 是质数
			for j := i; j < mx; j += i {
				if lpf[j] == 0 { // 首次访问 j
					lpf[j] = i
				}
			}
		}
	}
}

// 质因数分解
// 例如 primeFactorization(45) = [[3, 2], [5, 1]]，表示 45 = 3^2 * 5^1
// 时间复杂度 O(log x)
func primeFactorization(x int) (res [][2]int) {
	for x > 1 {
		p := lpf[x]
		e := 1
		for x /= p; x%p == 0; x /= p {
			e++
		}
		res = append(res, [2]int{p, e})
	}
	return
}`
        }
    },
    {
        title: "因子",
        data: {
"Python":
`# 预处理每个数的因子
MX = 1_000_001  # **根据题目调整**
divisors = [[] for _ in range(MX)]
for i in range(1, MX):
    for j in range(i, MX, i):  # 枚举 i 的倍数 j
        divisors[j].append(i)  # i 是 j 的因子
`,

"Java":
`class Solution {
    private static final int MX = 1_000_001; // **根据题目调整**
    private static final List<Integer>[] divisors = new ArrayList[MX];
    private static boolean initialized = false;

    // 这样写比 static block 快
    public Solution() {
        if (initialized) {
            return;
        }
        initialized = true;

        Arrays.setAll(divisors, _ -> new ArrayList<>());
        for (int i = 1; i < MX; i++) {
            for (int j = i; j < MX; j += i) { // 枚举 i 的倍数 j
                divisors[j].add(i); // i 是 j 的因子
            }
        }
    }

    public int solve(int[] nums) {
        
    }
}`,

"C++":
`constexpr int MX = 1'000'001; // **根据题目调整**
vector<int> divisors[MX];

int init = [] {
    for (int i = 1; i < MX; i++) {
        for (int j = i; j < MX; j += i) { // 枚举 i 的倍数 j
            divisors[j].push_back(i); // i 是 j 的因子
        }
    }
    return 0;
}();`,

"Go":
`const mx = 1_000_001 // **根据题目调整**

var divisors [mx][]int // 如果 mx 很大可能会 MLE，可以改成 int32

func init() {
	for i := 1; i < mx; i++ {
		for j := i; j < mx; j += i { // 枚举 i 的倍数 j
			divisors[j] = append(divisors[j], i) // i 是 j 的因子
		}
	}
}`
        }
    },
    {
        title: "最大公约数（GCD）和最小公倍数（LCM）",
        data: {
"Java":
`class Solution {
    private long gcd(long a, long b) {
        while (a != 0) {
            long tmp = a;
            a = b % a;
            b = tmp;
        }
        return b;
    }

    // 推荐先除后乘，尽量避免溢出
    private long lcm(long a, long b) {
        return a / gcd(a, b) * b;
    }
}`,

"Go":
`func gcd(a, b int) int {
    for a != 0 {
        a, b = b%a, a
    }
    return b
}

// 推荐先除后乘，尽量避免溢出
func lcm(a, b int) int {
    return a / gcd(a, b) * b
}`
        }
    },
    {
        title: "从小到大枚举回文数（从 1 开始枚举）",
        data: {
"Python":
`def gen_palindrome() -> Iterator[int]:
    base = 1
    while True:
        # 生成奇数长度回文数，例如 base = 10，生成的范围是 101 ~ 999
        for i in range(base, base * 10):
            s = str(i)
            x = int(s + s[::-1][1:])
            yield x

        # 生成偶数长度回文数，例如 base = 10，生成的范围是 1001 ~ 9999
        for i in range(base, base * 10):
            s = str(i)
            x = int(s + s[::-1])
            yield x

        base *= 10


for x in gen_palindrome():
    if x > 10 ** 9:  # 根据题目调整
        break
    # 处理 x 的逻辑写下面
    print(x)
`,

"Java":
`class Solution {
    private static final long MX = 10_000_000_000L; // 根据题目调整
    private static final List<Long> palindromes = new ArrayList<>();
    private static boolean initialized = false;

    // 这样写比 static block 快
    public Solution() {
        if (initialized) {
            return;
        }
        initialized = true;

        for (int base = 1; ; base *= 10) {
            // 生成奇数长度回文数，例如 base = 10，生成的范围是 101 ~ 999
            for (int i = base; i < base * 10; i++) {
                long x = i;
                for (int t = i / 10; t > 0; t /= 10) {
                    x = x * 10 + t % 10;
                }
                if (x > MX) {
                    return;
                }
                palindromes.add(x);
            }

            // 生成偶数长度回文数，例如 base = 10，生成的范围是 1001 ~ 9999
            for (int i = base; i < base * 10; i++) {
                long x = i;
                for (int t = i; t > 0; t /= 10) {
                    x = x * 10 + t % 10;
                }
                if (x > MX) {
                    return;
                }
                palindromes.add(x);
            }
        }
    }

    public int solve(int n) {
        
    }
}`,

"C++":
`const long long MX = 10'000'000'000LL; // 根据题目调整
vector<long long> palindromes;

// 预处理 [1,MX] 中的回文数
auto init = []() {
    for (int base = 1; ; base *= 10) {
        // 生成奇数长度回文数，例如 base = 10，生成的范围是 101 ~ 999
        for (int i = base; i < base * 10; i++) {
            long long x = i;
            for (int t = i / 10; t > 0; t /= 10) {
                x = x * 10 + t % 10;
            }
            if (x > MX) {
                return 0;
            }
            palindromes.push_back(x);
        }

        // 生成偶数长度回文数，例如 base = 10，生成的范围是 1001 ~ 9999
        for (int i = base; i < base * 10; i++) {
            long long x = i;
            for (int t = i; t > 0; t /= 10) {
                x = x * 10 + t % 10;
            }
            if (x > MX) {
                return 0;
            }
            palindromes.push_back(x);
        }
    }
}();`,

"Go":
`const mx = 10_000_000_000 // 根据题目调整

var palindromes []int

// 预处理 [1,mx] 中的回文数
func init() {
    for base := 1; ; base *= 10 {
        // 生成奇数长度回文数，例如 base = 10，生成的范围是 101 ~ 999
        for i := base; i < base*10; i++ {
            x := i
            for t := i / 10; t > 0; t /= 10 {
                x = x*10 + t%10
            }
            if x > mx {
                return
            }
            palindromes = append(palindromes, x)
        }

        // 生成偶数长度回文数，例如 base = 10，生成的范围是 1001 ~ 9999
        for i := base; i < base*10; i++ {
            x := i
            for t := i; t > 0; t /= 10 {
                x = x*10 + t%10
            }
            if x > mx {
                return
            }
            palindromes = append(palindromes, x)
        }
    }
}`
        }
    },
    {
        title: "带权树最近公共祖先（LCA）",
        data: {
"Python":
`class LcaBinaryLifting:
    def __init__(self, edges: List[List[int]]):
        n = len(edges) + 1
        m = n.bit_length()
        g = [[] for _ in range(n)]
        for x, y, w in edges:
            # 如果题目的节点编号从 1 开始，改成 x-1 和 y-1
            g[x].append((y, w))
            g[y].append((x, w))

        depth = [0] * n
        dis = [0] * n  # 如果是无权树（边权为 1），dis 可以去掉，用 depth 代替
        pa = [[-1] * n for _ in range(m)]

        def dfs(x: int, fa: int) -> None:
            pa[0][x] = fa
            for y, w in g[x]:
                if y != fa:
                    depth[y] = depth[x] + 1
                    dis[y] = dis[x] + w
                    dfs(y, x)
        dfs(0, -1)

        for i in range(m - 1):
            for x in range(n):
                if (p := pa[i][x]) != -1:
                    pa[i + 1][x] = pa[i][p]

        self.depth = depth
        self.dis = dis
        self.pa = pa

    # 返回 node 的第 k 个祖先节点
    # 如果不存在，返回 -1
    def get_kth_ancestor(self, node: int, k: int) -> int:
        pa = self.pa
        for i in range(k.bit_length()):
            if k >> i & 1:
                node = pa[i][node]
                if node < 0: 
                    return -1
        return node

    # 返回 x 和 y 的最近公共祖先
    def get_lca(self, x: int, y: int) -> int:
        if self.depth[x] > self.depth[y]:
            x, y = y, x
        # 使 y 和 x 在同一深度
        y = self.get_kth_ancestor(y, self.depth[y] - self.depth[x])
        if y == x:
            return x
        pa = self.pa
        for i in range(len(pa) - 1, -1, -1):
            px, py = pa[i][x], pa[i][y]
            if px != py:
                x, y = px, py  # 同时往上跳 2**i 步
        return pa[0][x]

    # 返回 x 到 y 的距离（最短路长度）
    def get_dis(self, x: int, y: int) -> int:
        return self.dis[x] + self.dis[y] - self.dis[self.get_lca(x, y)] * 2
`,

"Java":
`class LcaBinaryLifting {
    private final int[] depth;
    private final long[] dis; // 如果是无权树（边权为 1），dis 可以去掉，用 depth 代替
    private final int[][] pa;

    public LcaBinaryLifting(int[][] edges) {
        int n = edges.length + 1;
        int m = 32 - Integer.numberOfLeadingZeros(n); // n 的二进制长度
        List<int[]>[] g = new ArrayList[n];
        Arrays.setAll(g, e -> new ArrayList<>());
        for (int[] e : edges) {
            // 如果题目的节点编号从 1 开始，改成 x=e[0]-1 和 y=e[1]-1
            int x = e[0], y = e[1], w = e[2];
            g[x].add(new int[]{y, w});
            g[y].add(new int[]{x, w});
        }

        depth = new int[n];
        dis = new long[n];
        pa = new int[m][n];

        dfs(g, 0, -1);

        for (int i = 0; i < m - 1; i++) {
            for (int x = 0; x < n; x++) {
                int p = pa[i][x];
                pa[i + 1][x] = p < 0 ? -1 : pa[i][p];
            }
        }
    }

    private void dfs(List<int[]>[] g, int x, int fa) {
        pa[0][x] = fa;
        for (int[] e : g[x]) {
            int y = e[0];
            if (y != fa) {
                depth[y] = depth[x] + 1;
                dis[y] = dis[x] + e[1];
                dfs(g, y, x);
            }
        }
    }

    // 返回 node 的第 k 个祖先节点
    // 如果不存在，返回 -1
    public int getKthAncestor(int node, int k) {
        for (; k > 0 && node >= 0; k &= k - 1) {
            node = pa[Integer.numberOfTrailingZeros(k)][node];
        }
        return node;
    }

    // 返回 x 和 y 的最近公共祖先（节点编号从 0 开始）
    public int getLCA(int x, int y) {
        if (depth[x] > depth[y]) {
            int tmp = y;
            y = x;
            x = tmp;
        }
        // 使 y 和 x 在同一深度
        y = getKthAncestor(y, depth[y] - depth[x]);
        if (y == x) {
            return x;
        }
        for (int i = pa.length - 1; i >= 0; i--) {
            int px = pa[i][x], py = pa[i][y];
            if (px != py) {
                x = px;
                y = py; // 同时往上跳 2^i 步
            }
        }
        return pa[0][x];
    }

    // 返回 x 到 y 的距离（最短路长度）
    public long getDis(int x, int y) {
        return dis[x] + dis[y] - dis[getLCA(x, y)] * 2;
    }
}`,

"C++":
`class LcaBinaryLifting {
    vector<int> depth;
    vector<long long> dis; // 如果是无权树（边权为 1），dis 可以去掉，用 depth 代替
    vector<vector<int>> pa;

public:
    LcaBinaryLifting(vector<vector<int>>& edges) {
        int n = edges.size() + 1;
        int m = bit_width((unsigned) n); // n 的二进制长度
        vector<vector<pair<int, int>>> g(n);
        for (auto& e : edges) {
            // 如果题目的节点编号从 1 开始，改成 x=e[0]-1 和 y=e[1]-1
            int x = e[0], y = e[1], w = e[2];
            g[x].emplace_back(y, w);
            g[y].emplace_back(x, w);
        }

        depth.resize(n);
        dis.resize(n);
        pa.resize(m, vector<int>(n, -1));

        auto dfs = [&](this auto&& dfs, int x, int fa) -> void {
            pa[0][x] = fa;
            for (auto& [y, w] : g[x]) {
                if (y != fa) {
                    depth[y] = depth[x] + 1;
                    dis[y] = dis[x] + w;
                    dfs(y, x);
                }
            }
        };
        dfs(0, -1);

        for (int i = 0; i < m - 1; i++) {
            for (int x = 0; x < n; x++) {
                if (int p = pa[i][x]; p != -1) {
                    pa[i + 1][x] = pa[i][p];
                }
            }
        }
    }

    // 返回 node 的第 k 个祖先节点
    // 如果不存在，返回 -1
    int get_kth_ancestor(int node, int k) {
        for (; k > 0 && node >= 0; k &= k - 1) {
            node = pa[countr_zero((unsigned) k)][node];
        }
        return node;
    }

    // 返回 x 和 y 的最近公共祖先（节点编号从 0 开始）
    int get_lca(int x, int y) {
        if (depth[x] > depth[y]) {
            swap(x, y);
        }
        y = get_kth_ancestor(y, depth[y] - depth[x]); // 使 y 和 x 在同一深度
        if (y == x) {
            return x;
        }
        for (int i = pa.size() - 1; i >= 0; i--) {
            int px = pa[i][x], py = pa[i][y];
            if (px != py) {
                x = px;
                y = py; // 同时往上跳 2^i 步
            }
        }
        return pa[0][x];
    }

    // 返回 x 到 y 的距离（最短路长度）
    long long get_dis(int x, int y) {
        return dis[x] + dis[y] - dis[get_lca(x, y)] * 2;
    }
};`,

"Go":
`func minimumWeight(edges [][]int, queries [][]int) []int {
    n := len(edges) + 1
    type edge struct{ to, wt int }
    g := make([][]edge, n)
    for _, e := range edges {
        // 如果题目的节点编号从 1 开始，改成 x=e[0]-1 和 y=e[1]-1
        x, y, wt := e[0], e[1], e[2]
        g[x] = append(g[x], edge{y, wt})
        g[y] = append(g[y], edge{x, wt})
    }

    const mx = 17 // bits.Len(uint(n))
    pa := make([][mx]int, n)
    dep := make([]int, n)
    dis := make([]int, n) // 如果是无权树（边权为 1），dis 可以去掉，用 dep 代替

    var dfs func(int, int)
    dfs = func(x, p int) {
        pa[x][0] = p
        for _, e := range g[x] {
            y := e.to
            if y == p {
                continue
            }
            dep[y] = dep[x] + 1
            dis[y] = dis[x] + e.wt
            dfs(y, x)
        }
    }
    dfs(0, -1)

    for i := range mx - 1 {
        for x := range pa {
            p := pa[x][i]
            if p != -1 {
                pa[x][i+1] = pa[p][i]
            } else {
                pa[x][i+1] = -1
            }
        }
    }

    uptoDep := func(x, d int) int {
        for k := uint32(dep[x] - d); k > 0; k &= k - 1 {
            x = pa[x][bits.TrailingZeros32(k)]
        }
        return x
    }

    // 返回 x 和 y 的最近公共祖先（节点编号从 0 开始）
    getLCA := func(x, y int) int {
        if dep[x] > dep[y] {
            x, y = y, x
        }
        y = uptoDep(y, dep[x]) // 使 y 和 x 在同一深度
        if y == x {
            return x
        }
        for i := mx - 1; i >= 0; i-- {
            px, py := pa[x][i], pa[y][i]
            if px != py {
                x, y = px, py // 同时往上跳 2^i 步
            }
        }
        return pa[x][0]
    }

    // 返回 x 到 y 的距离（最短路长度）
    getDis := func(x, y int) int { return dis[x] + dis[y] - dis[getLCA(x, y)]*2 }

    // 以上是 LCA 模板

    ans := make([]int, len(queries))
    for i, q := range queries {
        // ...
    }
    return ans
}`

        }
    },
    {
        title: "KMP 字符串匹配算法",
        data: {
"Python":
`# 在文本串 text 中查找模式串 pattern，返回所有成功匹配的位置（pattern[0] 在 text 中的下标）
def kmp(text: str, pattern: str) -> List[int]:
    m = len(pattern)
    pi = [0] * m
    cnt = 0
    for i in range(1, m):
        b = pattern[i]
        while cnt and pattern[cnt] != b:
            cnt = pi[cnt - 1]
        if pattern[cnt] == b:
            cnt += 1
        pi[i] = cnt

    pos = []
    cnt = 0
    for i, b in enumerate(text):
        while cnt and pattern[cnt] != b:
            cnt = pi[cnt - 1]
        if pattern[cnt] == b:
            cnt += 1
        if cnt == len(pattern):
            pos.append(i - m + 1)
            cnt = pi[cnt - 1]
    return pos
`,

"Java":
`class Solution {
    // 在文本串 text 中查找模式串 pattern，返回所有成功匹配的位置（pattern[0] 在 text 中的下标）
    private List<Integer> kmp(char[] text, char[] pattern) {
        int m = pattern.length;
        int[] pi = new int[m];
        int cnt = 0;
        for (int i = 1; i < m; i++) {
            char b = pattern[i];
            while (cnt > 0 && pattern[cnt] != b) {
                cnt = pi[cnt - 1];
            }
            if (pattern[cnt] == b) {
                cnt++;
            }
            pi[i] = cnt;
        }

        List<Integer> pos = new ArrayList<>();
        cnt = 0;
        for (int i = 0; i < text.length; i++) {
            char b = text[i];
            while (cnt > 0 && pattern[cnt] != b) {
                cnt = pi[cnt - 1];
            }
            if (pattern[cnt] == b) {
                cnt++;
            }
            if (cnt == m) {
                pos.add(i - m + 1);
                cnt = pi[cnt - 1];
            }
        }
        return pos;
    }
}`,

"C++":
`// 在文本串 text 中查找模式串 pattern，返回所有成功匹配的位置（pattern[0] 在 text 中的下标）
vector<int> kmp(const string& text, const string& pattern) {
    int m = pattern.size();
    vector<int> pi(m);
    int cnt = 0;
    for (int i = 1; i < m; i++) {
        char b = pattern[i];
        while (cnt && pattern[cnt] != b) {
            cnt = pi[cnt - 1];
        }
        if (pattern[cnt] == b) {
            cnt++;
        }
        pi[i] = cnt;
    }

    vector<int> pos;
    cnt = 0;
    for (int i = 0; i < text.size(); i++) {
        char b = text[i];
        while (cnt && pattern[cnt] != b) {
            cnt = pi[cnt - 1];
        }
        if (pattern[cnt] == b) {
            cnt++;
        }
        if (cnt == m) {
            pos.push_back(i - m + 1);
            cnt = pi[cnt - 1];
        }
    }
    return pos;
}`,

"Go":
`// 在文本串 text 中查找模式串 pattern，返回所有成功匹配的位置（pattern[0] 在 text 中的下标）
func kmp(text, pattern string) (pos []int) {
    m := len(pattern)
    pi := make([]int, m)
    cnt := 0
    for i := 1; i < m; i++ {
        b := pattern[i]
        for cnt > 0 && pattern[cnt] != b {
            cnt = pi[cnt-1]
        }
        if pattern[cnt] == b {
            cnt++
        }
        pi[i] = cnt
    }

    cnt = 0
    for i, b := range text {
        for cnt > 0 && pattern[cnt] != byte(b) {
            cnt = pi[cnt-1]
        }
        if pattern[cnt] == byte(b) {
            cnt++
        }
        if cnt == m {
            pos = append(pos, i-m+1)
            cnt = pi[cnt-1]
        }
    }
    return
}`
        }
    },
    {
        title: "Z 函数（后缀的前缀）",
        data: {
"Python":
`# 计算并返回 z 数组，其中 z[i] = |LCP(s[i:], s)|
def calc_z(s: str) -> List[int]:
    n = len(s)
    z = [0] * n
    box_l = box_r = 0
    for i in range(1, n):
        if i <= box_r:
            z[i] = min(z[i - box_l], box_r - i + 1)
        while i + z[i] < n and s[z[i]] == s[i + z[i]]:
            box_l, box_r = i, i + z[i]
            z[i] += 1
    z[0] = n
    return z
`,

"Java":
`class Solution {
    // 计算并返回 z 数组，其中 z[i] = |LCP(s[i:], s)|
    private int[] calcZ(char[] s) {
        int n = s.length;
        int[] z = new int[n];
        int boxL = 0;
        int boxR = 0;
        for (int i = 1; i < n; i++) {
            if (i <= boxR) {
                z[i] = Math.min(z[i - boxL], boxR - i + 1);
            }
            while (i + z[i] < n && s[z[i]] == s[i + z[i]]) {
                boxL = i;
                boxR = i + z[i];
                z[i]++;
            }
        }
        z[0] = n;
        return z;
    }
}`,

"C++":
`// 计算并返回 z 数组，其中 z[i] = |LCP(s[i:], s)|
vector<int> calc_z(const string& s) {
    int n = s.size();
    vector<int> z(n);
    int box_l = 0, box_r = 0;
    for (int i = 1; i < n; i++) {
        if (i <= box_r) {
            z[i] = min(z[i - box_l], box_r - i + 1);
        }
        while (i + z[i] < n && s[z[i]] == s[i + z[i]]) {
            box_l = i;
            box_r = i + z[i];
            z[i]++;
        }
    }
    z[0] = n;
    return z;
}`,

"Go":
`// 计算并返回 z 数组，其中 z[i] = |LCP(s[i:], s)|
func calcZ(s string) []int {
    n := len(s)
    z := make([]int, n)
    boxL, boxR := 0, 0
    for i := 1; i < n; i++ {
        if i <= boxR {
            z[i] = min(z[i-boxL], boxR-i+1)
        }
        for i+z[i] < n && s[z[i]] == s[i+z[i]] {
            boxL, boxR = i, i+z[i]
            z[i]++
        }
    }
    z[0] = n
    return z
}`
        }
    },
    {
        title: "字典树（Trie）",
        data: {
"Python":
`class Node:
    __slots__ = 'son', 'end'

    def __init__(self):
        self.son = {}
        self.end = False

class Trie:
    def __init__(self):
        self.root = Node()

    def insert(self, word: str) -> None:
        cur = self.root
        for c in word:
            if c not in cur.son:  # 无路可走？
                cur.son[c] = Node()  # 那就造路！
            cur = cur.son[c]
        cur.end = True

    def find(self, word: str) -> int:
        cur = self.root
        for c in word:
            if c not in cur.son:  # 道不同，不相为谋
                return 0
            cur = cur.son[c]
        # 走过同样的路（2=完全匹配，1=前缀匹配）
        return 2 if cur.end else 1

    def search(self, word: str) -> bool:
        return self.find(word) == 2

    def startsWith(self, prefix: str) -> bool:
        return self.find(prefix) != 0
`,

"Java":
`class Trie {
    private static class Node {
        Node[] son = new Node[26];
        boolean end = false;
    }

    private final Node root = new Node();

    public void insert(String word) {
        Node cur = root;
        for (char c : word.toCharArray()) {
            c -= 'a';
            if (cur.son[c] == null) { // 无路可走？
                cur.son[c] = new Node(); // new 出来！
            }
            cur = cur.son[c];
        }
        cur.end = true;
    }

    public boolean search(String word) {
        return find(word) == 2;
    }

    public boolean startsWith(String prefix) {
        return find(prefix) != 0;
    }

    private int find(String word) {
        Node cur = root;
        for (char c : word.toCharArray()) {
            c -= 'a';
            if (cur.son[c] == null) { // 道不同，不相为谋
                return 0;
            }
            cur = cur.son[c];
        }
        // 走过同样的路（2=完全匹配，1=前缀匹配）
        return cur.end ? 2 : 1;
    }
}`,

"C++":
`struct Node {
    Node* son[26]{};
    bool end = false;
};

class Trie {
    Node* root = new Node();

    int find(string word) {
        Node* cur = root;
        for (char c : word) {
            c -= 'a';
            if (cur->son[c] == nullptr) { // 道不同，不相为谋
                return 0;
            }
            cur = cur->son[c];
        }
        // 走过同样的路（2=完全匹配，1=前缀匹配）
        return cur->end ? 2 : 1;
    }

    void destroy(Node* node) {
        if (node == nullptr) {
            return;
        }
        for (Node* son : node->son) {
            destroy(son);
        }
        delete node;
    }

public:
    ~Trie() {
        destroy(root);
    }

    void insert(string word) {
        Node* cur = root;
        for (char c : word) {
            c -= 'a';
            if (cur->son[c] == nullptr) { // 无路可走？
                cur->son[c] = new Node(); // new 出来！
            }
            cur = cur->son[c];
        }
        cur->end = true;
    }

    bool search(string word) {
        return find(word) == 2;
    }

    bool startsWith(string prefix) {
        return find(prefix) != 0;
    }
};`,

"Go":
`type Node struct {
    son [26]*Node
    end bool
}

type Trie struct {
    root *Node
}

func Constructor() Trie {
    return Trie{&Node{}}
}

func (t Trie) Insert(word string) {
    cur := t.root
    for _, c := range word {
        c -= 'a'
        if cur.son[c] == nil { // 无路可走？
            cur.son[c] = &Node{} // 那就造路！
        }
        cur = cur.son[c]
    }
    cur.end = true
}

func (t Trie) find(word string) int {
    cur := t.root
    for _, c := range word {
        c -= 'a'
        if cur.son[c] == nil { // 道不同，不相为谋
            return 0
        }
        cur = cur.son[c]
    }
    // 走过同样的路（2=完全匹配，1=前缀匹配）
    if cur.end {
        return 2
    }
    return 1
}

func (t Trie) Search(word string) bool {
    return t.find(word) == 2
}

func (t Trie) StartsWith(prefix string) bool {
    return t.find(prefix) != 0
}`,

"JavaScript":
`class Node {
    constructor() {
        this.son = Array(26).fill(null);
        this.end = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(word) {
        let cur = this.root;
        for (let c of word) {
            c = c.charCodeAt(0) - 'a'.charCodeAt(0);
            if (cur.son[c] === null) { // 无路可走？
                cur.son[c] = new Node(); // new 出来！
            }
            cur = cur.son[c];
        }
        cur.end = true;
    }

    #find(word) {
        let cur = this.root;
        for (let c of word) {
            c = c.charCodeAt(0) - 'a'.charCodeAt(0);
            if (cur.son[c] === null) { // 道不同，不相为谋
                return 0;
            }
            cur = cur.son[c];
        }
        // 走过同样的路（2=完全匹配，1=前缀匹配）
        return cur.end ? 2 : 1;
    }

    search(word) {
        return this.#find(word) === 2;
    }

    startsWith(prefix) {
        return this.#find(prefix) !== 0;
    }
}`,

"Rust":
`struct Node {
    son: [Option<Box<Node>>; 26],
    end: bool,
}

impl Node {
    fn new() -> Self {
        Self {
            son: [const { None }; 26],
            end: false,
        }
    }
}

struct Trie {
    root: Node,
}

impl Trie {
    fn new() -> Self {
        Self {
            root: Node::new()
        }
    }

    fn insert(&mut self, word: String) {
        let mut cur = &mut self.root;
        for c in word.bytes() {
            let c = (c - b'a') as usize;
            if cur.son[c].is_none() { // 无路可走？
                cur.son[c] = Some(Box::new(Node::new())); // new 出来！
            }
            cur = cur.son[c].as_mut().unwrap();
        }
        cur.end = true;
    }

    fn find(&self, word: String) -> i32 {
        let mut cur = &self.root;
        for c in word.bytes() {
            let c = (c - b'a') as usize;
            if cur.son[c].is_none() { // 道不同，不相为谋
                return 0;
            }
            cur = cur.son[c].as_ref().unwrap();
        }
        // 走过同样的路（2=完全匹配，1=前缀匹配）
        if cur.end { 2 } else { 1 }
    }

    fn search(&self, word: String) -> bool {
        self.find(word) == 2
    }

    fn starts_with(&self, prefix: String) -> bool {
        self.find(prefix) != 0
    }
}`
        }
    }
];