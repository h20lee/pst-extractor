// See PSTMessage.class for details on these properties
export enum OutlookProperties {
    PR_RTF_COMPRESSED = 0x1009,
    PR_NON_RECEIPT_NOTIFICATION_REQUESTED = 0x0C06,
    PR_ORIGINATOR_NON_DELIVERY_REPORT_REQUESTED = 0x0c08,
    PR_RECIPIENT_TYPE = 0x0c15,
    PR_MESSAGE_CODEPAGE = 0x3FFD,
    PR_INTERNET_CPID = 0x3FDE,
    PR_RTF_SYNC_BODY_CRC = 0x1006,
    PR_RTF_SYNC_BODY_COUNT = 0x1007,
    PR_RTF_SYNC_BODY_TAG = 0x1008,
    PR_RTF_SYNC_PREFIX_COUNT = 0x1010,
    PR_RTF_SYNC_TRAILING_COUNT = 0x1011,
    PR_BODY_HTML = 0x1013,
    PR_IMPORTANCE = 0x0017,
    PR_MESSAGE_CLASS = 0x001A,
    PR_SUBJECT = 0x0037,
    PR_CLIENT_SUBMIT_TIME = 0x0039,
    PR_RECEIVED_BY_NAME = 0x0040,
    PR_SENT_REPRESENTING_NAME = 0x0042,
    PR_SENT_REPRESENTING_ADDRTYPE = 0x0064,
    PR_SENT_REPRESENTING_EMAIL_ADDRESS = 0x0065,
    PR_CONVERSATION_TOPIC = 0x0070,
    PR_RECEIVED_BY_ADDRTYPE = 0x0075,
    PR_RECEIVED_BY_EMAIL_ADDRESS = 0x0076,
    PR_TRANSPORT_MESSAGE_HEADERS = 0x007D,
    PR_MESSAGE_FLAGS = 0x0E07,
}
