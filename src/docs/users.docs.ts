/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: Endpoints related to user data and sessions
 */

export const getCurrentUser = `
/**
 * @swagger
 * /api/v1/users/me:
 *   get:
 *     summary: Get current authenticated user
 *     tags: [Users]
 *     description: Returns the details of the currently authenticated user based on the access token provided.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Current user retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "success"
 *                 message:
 *                   type: string
 *                   example: "User fetched successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     user:
 *                       $ref: '#/components/schemas/User'
 *       401:
 *         description: Unauthorized - No or invalid token provided
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             example:
 *               status: "error"
 *               message: "Unauthorized"
 *               status_code: 401
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             example:
 *               status: "error"
 *               message: "Something went wrong!"
 *               status_code: 500
 */
`;

export const updateUserProfile = `
/**
 * @swagger
 * /api/v1/users/me:
 *   patch:
 *     summary: Update authenticated user's profile
 *     tags: [Users]
 *     description: Allows a user to update their first name, last name, avatar, and bio (for talents only).
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *                 example: "Jane"
 *               last_name:
 *                 type: string
 *                 example: "Doe"
 *               bio:
 *                 type: string
 *                 example: "I am a full-stack developer"
 *               avatar:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Profile updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "success"
 *                 message:
 *                   type: string
 *                   example: "Profile updated successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     first_name:
 *                       type: string
 *                     last_name:
 *                       type: string
 *                     avatar:
 *                       type: string
 *                     bio:
 *                       type: string
 *       401:
 *         description: Unauthorized - No or invalid token provided
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             example:
 *               status: "error"
 *               message: "Unauthorized"
 *               status_code: 401
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             example:
 *               status: "error"
 *               message: "Something went wrong!"
 *               status_code: 500
 */
`;
