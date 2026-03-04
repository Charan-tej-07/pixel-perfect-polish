export interface CodingProblem {
  id: number;
  title: string;
  description: string;
  category: "Web Development" | "DSA" | "Basic Coding";
  difficulty: "Easy" | "Medium" | "Hard";
  example: string;
  hint: string;
  testCases: { input: string; expected: string }[];
  acceptKeywords: string[][];
  /** A sample correct answer shown when the user gets it wrong */
  sampleAnswer: string;
}

const problems: CodingProblem[] = [
  {
    id: 1,
    title: "Reverse a String",
    description: "Write a function that takes a string and returns it reversed.",
    category: "Basic Coding",
    difficulty: "Easy",
    example: 'Input: "hello" → Output: "olleh"',
    hint: "Try using split, reverse, and join.",
    testCases: [
      { input: '"hello"', expected: '"olleh"' },
      { input: '"world"', expected: '"dlrow"' },
    ],
    acceptKeywords: [["reverse"], ["split", "join"], ["for", "length"]],
    sampleAnswer: `function reverseString(str) {\n  return str.split('').reverse().join('');\n}`,
  },
  {
    id: 2,
    title: "FizzBuzz",
    description: "Given a number n, return 'Fizz' if divisible by 3, 'Buzz' if divisible by 5, 'FizzBuzz' if divisible by both, otherwise the number as string.",
    category: "Basic Coding",
    difficulty: "Easy",
    example: "Input: 15 → Output: 'FizzBuzz'",
    hint: "Check divisibility by 15 first, then 3 and 5.",
    testCases: [
      { input: "15", expected: '"FizzBuzz"' },
      { input: "3", expected: '"Fizz"' },
    ],
    acceptKeywords: [["fizz", "buzz"], ["% 3", "% 5"], ["%3", "%5"]],
    sampleAnswer: `function fizzBuzz(n) {\n  if (n % 15 === 0) return "FizzBuzz";\n  if (n % 3 === 0) return "Fizz";\n  if (n % 5 === 0) return "Buzz";\n  return String(n);\n}`,
  },
  {
    id: 3,
    title: "Palindrome Check",
    description: "Write a function that checks if a given string is a palindrome.",
    category: "DSA",
    difficulty: "Easy",
    example: 'Input: "racecar" → Output: true',
    hint: "Compare the string with its reverse.",
    testCases: [
      { input: '"racecar"', expected: "true" },
      { input: '"hello"', expected: "false" },
    ],
    acceptKeywords: [["reverse"], ["split", "reverse", "join"], ["for", "length"]],
    sampleAnswer: `function isPalindrome(str) {\n  return str === str.split('').reverse().join('');\n}`,
  },
  {
    id: 4,
    title: "Two Sum",
    description: "Given an array of numbers and a target, return indices of two numbers that add up to the target.",
    category: "DSA",
    difficulty: "Medium",
    example: "Input: [2,7,11,15], target=9 → Output: [0,1]",
    hint: "Use a hash map to store complements.",
    testCases: [
      { input: "[2,7,11,15], 9", expected: "[0,1]" },
    ],
    acceptKeywords: [["map", "target"], ["hash"], ["for", "target"], ["complement"]],
    sampleAnswer: `function twoSum(nums, target) {\n  const map = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    const complement = target - nums[i];\n    if (map.has(complement)) return [map.get(complement), i];\n    map.set(nums[i], i);\n  }\n}`,
  },
  {
    id: 5,
    title: "CSS Flexbox Center",
    description: "Write CSS properties to center a child element both horizontally and vertically inside a parent container.",
    category: "Web Development",
    difficulty: "Easy",
    example: "display: flex; justify-content: center; align-items: center;",
    hint: "Use display: flex with centering properties.",
    testCases: [
      { input: '"center"', expected: '"display: flex; justify-content: center; align-items: center;"' },
    ],
    acceptKeywords: [["flex", "center"], ["display", "justify-content", "align-items"], ["grid", "place-items"]],
    sampleAnswer: `display: flex;\njustify-content: center;\nalign-items: center;`,
  },
  {
    id: 6,
    title: "Find Maximum in Array",
    description: "Write a function that finds the maximum number in an array.",
    category: "Basic Coding",
    difficulty: "Easy",
    example: "Input: [3, 7, 2, 9, 1] → Output: 9",
    hint: "Use Math.max with spread operator.",
    testCases: [
      { input: "[3,7,2,9,1]", expected: "9" },
    ],
    acceptKeywords: [["math.max"], ["max"], ["sort"], ["reduce"], ["for", ">"]],
    sampleAnswer: `function findMax(arr) {\n  return Math.max(...arr);\n}`,
  },
  {
    id: 7,
    title: "Fibonacci Number",
    description: "Given n, return the nth Fibonacci number. F(0)=0, F(1)=1, F(n)=F(n-1)+F(n-2).",
    category: "DSA",
    difficulty: "Medium",
    example: "Input: 6 → Output: 8",
    hint: "Use iteration or memoization.",
    testCases: [
      { input: "6", expected: "8" },
      { input: "10", expected: "55" },
    ],
    acceptKeywords: [["fib"], ["n-1", "n-2"], ["prev"], ["memo"], ["dp"], ["recursive"]],
    sampleAnswer: `function fibonacci(n) {\n  if (n <= 1) return n;\n  let a = 0, b = 1;\n  for (let i = 2; i <= n; i++) {\n    [a, b] = [b, a + b];\n  }\n  return b;\n}`,
  },
  {
    id: 8,
    title: "Responsive Media Query",
    description: "Write a CSS media query that applies styles only for screens smaller than 768px.",
    category: "Web Development",
    difficulty: "Easy",
    example: "@media (max-width: 768px) { ... }",
    hint: "Use @media with max-width.",
    testCases: [
      { input: '"768"', expected: '"@media (max-width: 768px)"' },
    ],
    acceptKeywords: [["@media", "max-width"], ["media", "768"]],
    sampleAnswer: `@media (max-width: 768px) {\n  /* mobile styles here */\n}`,
  },
  {
    id: 9,
    title: "Count Vowels",
    description: "Write a function that counts the number of vowels in a string.",
    category: "Basic Coding",
    difficulty: "Easy",
    example: 'Input: "hello world" → Output: 3',
    hint: "Use a regex or loop through characters.",
    testCases: [
      { input: '"hello world"', expected: "3" },
    ],
    acceptKeywords: [["aeiou"], ["vowel"], ["match"], ["regex"]],
    sampleAnswer: `function countVowels(str) {\n  const matches = str.match(/[aeiou]/gi);\n  return matches ? matches.length : 0;\n}`,
  },
  {
    id: 10,
    title: "Binary Search",
    description: "Implement binary search on a sorted array. Return the index of the target, or -1 if not found.",
    category: "DSA",
    difficulty: "Medium",
    example: "Input: [1,3,5,7,9], target=5 → Output: 2",
    hint: "Use two pointers: left and right.",
    testCases: [
      { input: "[1,3,5,7,9], 5", expected: "2" },
    ],
    acceptKeywords: [["mid"], ["left", "right"], ["binary"], ["low", "high"], ["while"]],
    sampleAnswer: `function binarySearch(arr, target) {\n  let left = 0, right = arr.length - 1;\n  while (left <= right) {\n    const mid = Math.floor((left + right) / 2);\n    if (arr[mid] === target) return mid;\n    if (arr[mid] < target) left = mid + 1;\n    else right = mid - 1;\n  }\n  return -1;\n}`,
  },
  {
    id: 11,
    title: "Event Listener in JS",
    description: "Write JavaScript code to add a click event listener to a button with id 'myBtn' that shows an alert saying 'Clicked!'.",
    category: "Web Development",
    difficulty: "Easy",
    example: "document.getElementById('myBtn').addEventListener('click', ...)",
    hint: "Use addEventListener with 'click' event.",
    testCases: [
      { input: '"myBtn"', expected: '"addEventListener"' },
    ],
    acceptKeywords: [["addeventlistener", "click"], ["onclick"], ["getelementbyid", "click"]],
    sampleAnswer: `document.getElementById('myBtn').addEventListener('click', function() {\n  alert('Clicked!');\n});`,
  },
  {
    id: 12,
    title: "Array Flatten",
    description: "Write a function that flattens a nested array into a single-level array.",
    category: "DSA",
    difficulty: "Medium",
    example: "Input: [[1,2],[3,[4,5]]] → Output: [1,2,3,4,5]",
    hint: "Use recursion or Array.flat(Infinity).",
    testCases: [
      { input: "[[1,2],[3,[4,5]]]", expected: "[1,2,3,4,5]" },
    ],
    acceptKeywords: [["flat"], ["concat", "recursive"], ["reduce", "concat"], ["isarray"]],
    sampleAnswer: `function flatten(arr) {\n  return arr.flat(Infinity);\n}`,
  },
];

export function getDailyProblem(category?: string): CodingProblem {
  const filtered = category
    ? problems.filter(p => p.category === category)
    : problems;
  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000
  );
  return filtered[dayOfYear % filtered.length];
}

export default problems;
